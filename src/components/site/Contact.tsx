import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const PABBLY_WEBHOOK_URL = import.meta.env.VITE_PABBLY_WEBHOOK_URL ?? "";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!PABBLY_WEBHOOK_URL) {
      setError("Form submission is not configured yet.");
      return;
    }

    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      business: String(formData.get("business") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      source: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(PABBLY_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      form.reset();
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or use WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-surface-dark py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            Let's talk
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to grow your business online?
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Get a free consultation on WhatsApp — we'll answer your questions and
            share ideas tailored to your business. No pressure, no jargon.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-cta mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp now
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-brand text-emerald-brand-foreground">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Thanks!</h3>
              <p className="mt-2 text-sm text-white/70">
                We'll reach out shortly. For faster replies, message us on WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="Priya Sharma" />
                <Field label="Business Name" name="business" placeholder="Bloom Hair Studio" />
              </div>
              <Field label="Phone" name="phone" type="tel" placeholder="+91 98xxxxxx" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business…"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-emerald-brand focus:outline-none focus:ring-2 focus:ring-emerald-brand/40"
                />
              </div>
              {error ? <p className="text-sm text-red-300">{error}</p> : null}
              <button
                type="submit"
                disabled={submitting}
                className="btn-cta inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-semibold"
              >
                {submitting ? "Sending..." : "Send Enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-emerald-brand focus:outline-none focus:ring-2 focus:ring-emerald-brand/40"
      />
    </div>
  );
}

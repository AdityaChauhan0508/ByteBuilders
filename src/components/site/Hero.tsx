import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-mockup.jpg";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-surface to-background"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-brand/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-3 py-1 text-xs font-medium text-emerald-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Websites that grow local businesses
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl lg:text-6xl">
            We build websites that bring you{" "}
            <span className="text-emerald-brand">customers</span> — not just a digital business card.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Custom websites, local SEO, and Google visibility for salons, clinics,
            restaurants, gyms, and coaching institutes. Look professional online and
            get discovered by people nearby.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand/20 bg-background px-6 py-3.5 text-base font-semibold text-brand transition-all hover:border-brand hover:bg-brand hover:text-primary-foreground"
            >
              See Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-2xl font-bold text-brand">5 days</dt>
              <dd className="text-xs text-muted-foreground">Fastest launch</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-brand">₹6k+</dt>
              <dd className="text-xs text-muted-foreground">Starter pricing</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-brand">100%</dt>
              <dd className="text-xs text-muted-foreground">Mobile-ready</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-emerald-brand/20" />
          <img
            src={heroImg}
            alt="Preview of a small business website on laptop and phone"
            width={1280}
            height={960}
            className="relative w-full rounded-3xl shadow-2xl ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}

import { Check, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const packages = [
  {
    tier: "Starter",
    tagline: "Get Online",
    price: "₹9,999",
    popular: false,
    features: [
      "5 professional pages",
      "Mobile responsive design",
      "WhatsApp click-to-chat",
      "Contact form",
      "1 round of revisions",
    ],
  },
  {
    tier: "Standard",
    tagline: "Get Leads",
    price: "₹19,999",
    popular: true,
    features: [
      "10 professional pages",
      "Online booking widget",
      "Google Maps integration",
      "Basic SEO setup",
      "Analytics dashboard",
      "2 rounds of revisions",
    ],
  },
  {
    tier: "Pro",
    tagline: "Get Found & Grow",
    price: "₹35,999",
    popular: false,
    features: [
      "Everything in Standard",
      "Google Business Profile setup",
      "Local SEO optimization",
      "Ad-ready landing page",
      "Monthly performance reports",
      "3 rounds of revisions",
    ],
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            Simple packages, built for local businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick a package that fits your goals today. Upgrade anytime as you grow.
          </p>
        </div>

        <div ref={ref} className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.tier}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                p.popular
                  ? "border-emerald-brand ring-2 ring-emerald-brand/40 md:scale-[1.02]"
                  : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-emerald-brand px-3 py-1 text-xs font-semibold text-emerald-brand-foreground shadow">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <div>
                <h3 className="font-display text-2xl font-bold text-brand">{p.tier}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-brand">{p.tagline}</p>
                <p className="mt-4 font-display text-3xl font-bold text-foreground">
                  {p.price}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-brand/15 text-emerald-brand">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  p.popular
                    ? "btn-cta"
                    : "bg-brand text-primary-foreground hover:bg-brand/90"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-muted p-5 text-center text-sm text-muted-foreground">
          Plus optional <span className="font-semibold text-foreground">Care Plans</span>{" "}
          starting at ₹299/month to keep your site updated, secure, and growing.
        </p>
      </div>
    </section>
  );
}

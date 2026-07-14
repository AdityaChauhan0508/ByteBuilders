import {
  MapPin,
  MessageCircle,
  Zap,
  ShieldCheck,
  Palette,
  Wallet,
} from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "Local SEO built in",
    desc: "Google Business Profile setup + local SEO included in our Pro package.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-first",
    desc: "We talk on WhatsApp — no confusing emails or jargon-filled updates.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    desc: "Your site can go live in as little as 5 days from our first call.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing care plans",
    desc: "Optional monthly care keeps your site secure, updated, and never broken.",
  },
  {
    icon: Palette,
    title: "Custom design",
    desc: "Every website is designed for your brand — never a recycled template.",
  },
  {
    icon: Wallet,
    title: "Small-business pricing",
    desc: "Honest, affordable packages built for real local business budgets.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            Made for small businesses like yours
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-emerald-brand/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

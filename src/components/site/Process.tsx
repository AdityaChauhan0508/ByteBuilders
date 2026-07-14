import { MessageCircle, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Discovery Call",
    desc: "We talk about your business, your customers, and what success looks like.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "We design a custom website tailored to your brand — no cookie-cutter templates.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We test everything and take your site live, ready for real customers.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    desc: "Ongoing support and optional SEO or care plans to keep you moving forward.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            Four simple steps to launch
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald-brand/40 to-transparent md:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-lg ring-4 ring-background">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-brand">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

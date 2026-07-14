import { Sparkles, MapPin, Inbox } from "lucide-react";

const goals = [
  {
    icon: Sparkles,
    title: "Look professional online",
    description:
      "Have a polished website that builds trust — without a huge budget or technical headaches.",
  },
  {
    icon: MapPin,
    title: "Show up on Google nearby",
    description:
      "Get found by customers searching for your service in your area, on maps and in search results.",
  },
  {
    icon: Inbox,
    title: "Get enquiries the easy way",
    description:
      "Turn website visitors into WhatsApp messages and calls — no confusing email chains to juggle.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            Built for real needs
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            What local businesses want
          </h2>
          <p className="mt-4 text-muted-foreground">
            The goals we hear again and again from salon, clinic, restaurant, gym and
            coaching owners — and what we build for.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {goals.map((g) => (
            <div
              key={g.title}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

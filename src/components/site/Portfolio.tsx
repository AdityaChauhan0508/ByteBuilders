import { Eye } from "lucide-react";
import salon from "@/assets/portfolio-salon.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import coaching from "@/assets/portfolio-coaching.jpg";

const projects = [
  { title: "Bloom Hair Studio", type: "Salon", img: salon, href: "#" },
  { title: "Spice Route Kitchen", type: "Restaurant", img: restaurant, href: "#" },
  { title: "Excel Coaching Institute", type: "Coaching Institute", img: coaching, href: "#" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-brand">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            See what we can build
          </h2>
          <p className="mt-4 text-muted-foreground">
            Concept designs made for the kinds of businesses we love working with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} concept design`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                  Concept Design
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.type}</p>
                </div>
                <Eye className="h-5 w-5 text-emerald-brand transition-transform group-hover:scale-110" />
              </div>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-muted-foreground">
          These are concept designs showcasing our design capability — real client
          projects coming soon!
        </p>
      </div>
    </section>
  );
}

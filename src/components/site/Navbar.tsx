import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // account for sticky navbar (~64px); trigger when section crosses middle
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-brand">
          <img
            src="/brand-logo.svg"
            alt="ByteBuilders logo"
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="leading-none">
            Byte<span className="text-emerald-brand">Builders</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-emerald-brand after:transition-transform after:duration-300 hover:text-brand hover:after:scale-x-100 ${
                  isActive
                    ? "text-brand after:scale-x-100"
                    : "text-foreground/80"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="btn-cta hidden rounded-xl px-4 py-2 text-sm font-semibold md:inline-flex"
        >
          Get Free Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-brand/10 text-brand"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-cta mt-2 rounded-xl px-4 py-2 text-center text-sm font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

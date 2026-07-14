import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/brand-logo.svg"
              alt="ByteBuilders logo"
              className="h-11 w-11 shrink-0 object-contain"
            />
            <p className="font-display text-2xl font-bold text-white">
              Byte<span className="text-emerald-brand">Builders</span>
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Websites and local SEO for small businesses that want to grow — simply,
            honestly, and beautifully.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href="#" label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={WHATSAPP_URL} label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-emerald-brand">Services</a></li>
            <li><a href="#portfolio" className="hover:text-emerald-brand">Portfolio</a></li>
            <li><a href="#process" className="hover:text-emerald-brand">Process</a></li>
            <li><a href="#contact" className="hover:text-emerald-brand">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-brand" /> +91 8368818668
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-brand" /> adityachauhan0520@gmail.com
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-brand"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-brand" /> WhatsApp us anytime
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} ByteBuilders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-emerald-brand hover:text-emerald-brand-foreground"
    >
      {children}
    </a>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ByteBuilders — Websites That Bring Local Businesses More Customers" },
      {
        name: "description",
        content:
          "ByteBuilders builds affordable, mobile-first websites and local SEO for salons, clinics, restaurants, gyms, and coaching institutes. Launch in as little as 5 days.",
      },
      { property: "og:title", content: "ByteBuilders — Websites for Local Businesses" },
      {
        property: "og:description",
        content:
          "Custom websites, local SEO, and Google visibility for small businesses. WhatsApp-first, jargon-free.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ByteBuilders — Websites for Local Businesses" },
      {
        name: "twitter:description",
        content:
          "Custom websites, local SEO, and Google visibility for small businesses. WhatsApp-first, jargon-free.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ByteBuilders",
          description:
            "Websites and local SEO for salons, clinics, restaurants, gyms, and coaching institutes.",
          areaServed: "IN",
          priceRange: "₹₹",
          serviceType: [
            "Website design",
            "Local SEO",
            "Google Business Profile setup",
          ],
        }),
      },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

"use client";

import Image from "next/image";
import { SHOP, NAV_LINKS } from "@/data/constants";

export default function Header() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-candy-cream border-b border-candy-pink/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => handleScroll("#home")}
          className="hover:opacity-80 transition-opacity"
          aria-label="Go to top"
        >
          <Image
            src="/images/sweet-lizzy-logo-trans.png"
            alt={SHOP.name}
            width={110}
            height={72}
            className="object-contain"
          />
        </button>

        <nav className="hidden sm:flex gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="font-body text-sm font-semibold text-candy-brown hover:text-candy-rose transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile: single CTA */}
        <button
          onClick={() => handleScroll("#contact")}
          className="sm:hidden bg-candy-rose text-white font-body font-semibold text-sm px-4 py-2 rounded-full hover:bg-candy-pink transition-colors"
        >
          Find Us
        </button>
      </div>
    </header>
  );
}

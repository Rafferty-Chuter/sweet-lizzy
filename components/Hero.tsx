"use client";

import Image from "next/image";
import { SHOP } from "@/data/constants";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[85vh] min-h-[520px] w-full">
      <Image
        src="/images/Shop_front.jpg"
        alt="Sweet Lizzy shop front in Farnham"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Warm amber overlay for readability */}
      <div className="absolute inset-0 bg-amber-900/40" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/images/sweet-lizzy-logo-trans.png"
          alt={SHOP.name}
          width={280}
          height={183}
          className="object-contain drop-shadow-2xl mb-4"
          priority
        />
        <p className="font-body text-xl sm:text-2xl text-amber-100 font-semibold drop-shadow mb-8 max-w-lg">
          {SHOP.tagline}
        </p>
        <button
          onClick={handleScroll}
          className="bg-candy-rose hover:bg-candy-pink text-white font-body font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Find Us in Farnham
        </button>
      </div>
    </section>
  );
}

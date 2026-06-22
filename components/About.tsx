import { SHOP } from "@/data/constants";

export default function About() {
  return (
    <section id="about" className="bg-candy-cream py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl text-candy-rose mb-6">
          Our Story
        </h2>
        <p className="font-body text-lg text-candy-brown leading-relaxed">
          {SHOP.description}
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <span className="text-3xl">🍭</span>
          <span className="text-3xl">🍬</span>
          <span className="text-3xl">🍫</span>
        </div>
      </div>
    </section>
  );
}

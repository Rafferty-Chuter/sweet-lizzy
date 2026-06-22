import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/data/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl text-candy-rose text-center mb-3">
          Our Sweets
        </h2>
        <p className="font-body text-center text-candy-brown mb-12 text-lg">
          Something for every sweet tooth
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-candy-cream"
            >
              {cat.placeholder ? (
                /* Placeholder for categories without a photo yet */
                <div className="w-full h-48 bg-candy-peach flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2">📸</span>
                  <span className="font-body text-sm text-candy-brown font-semibold">
                    Photo coming soon
                  </span>
                </div>
              ) : (
                <div className="relative w-full h-48">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-4">
                <h3 className="font-heading text-xl text-candy-rose mb-1">
                  {cat.name}
                </h3>
                <p className="font-body text-sm text-candy-brown leading-snug">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

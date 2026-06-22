import { SHOP } from "@/data/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl text-candy-rose text-center mb-3">
          Find Us
        </h2>
        <p className="font-body text-center text-candy-brown mb-12 text-lg">
          Come and see us in the heart of Farnham
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact details */}
          <div className="bg-candy-cream rounded-2xl p-8 shadow-md space-y-5">
            <div>
              <h3 className="font-heading text-xl text-candy-rose mb-1">
                Address
              </h3>
              <p className="font-body text-candy-brown leading-relaxed">
                {SHOP.address}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl text-candy-rose mb-1">
                Phone
              </h3>
              <p className="font-body text-candy-brown">{SHOP.phone}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl text-candy-rose mb-1">
                Email
              </h3>
              <p className="font-body text-candy-brown">{SHOP.email}</p>
            </div>

            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-candy-rose text-white font-body font-bold px-6 py-3 rounded-full hover:bg-candy-pink transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-md h-72 md:h-full min-h-64">
            <iframe
              src={SHOP.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sweet Lizzy location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

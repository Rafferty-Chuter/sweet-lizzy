import { HIGHLIGHTS } from "@/data/constants";

export default function Highlights() {
  return (
    <section className="bg-candy-pink/10 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl text-candy-rose text-center mb-12">
          Why Sweet Lizzy?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-heading text-2xl text-candy-rose mb-3">
                {item.title}
              </h3>
              <p className="font-body text-candy-brown text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { OPENING_HOURS } from "@/data/constants";

export default function Hours() {
  return (
    <section className="bg-candy-cream py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-heading text-4xl text-candy-rose mb-3">
          Opening Hours
        </h2>

        {/* TODO notice */}
        <p className="font-body text-xs text-amber-700 bg-amber-100 rounded-lg px-4 py-2 mb-8 inline-block">
          ⚠️ Opening times below are placeholders — please update{" "}
          <code className="font-mono">data/constants.ts</code> with real hours.
        </p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="w-full font-body text-sm">
            <tbody>
              {OPENING_HOURS.map((row, i) => (
                <tr
                  key={row.day}
                  className={i % 2 === 0 ? "bg-white" : "bg-candy-cream/60"}
                >
                  <td className="px-6 py-3 text-left font-semibold text-candy-brown">
                    {row.day}
                  </td>
                  <td className="px-6 py-3 text-right text-candy-rose font-semibold">
                    {row.hours === "TODO" ? (
                      <span className="italic text-amber-500">
                        — to be confirmed —
                      </span>
                    ) : (
                      row.hours
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

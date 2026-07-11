import HeroBanner from "../components/HeroBanner";
import CityCard from "../components/CityCard";
import { cities } from "../data/listings";

export default function Home() {
  return (
    <div>
      <HeroBanner />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Browse by Area</h2>
        <p className="mt-1 text-slate-600">Check below for room availability, pricing, and sharing options.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Sharing Options Available</h2>
        <p className="mt-1 text-slate-600">Choose the room type that suits you best.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            
            { count: "2", label: "Two Sharing" },
            { count: "3", label: "Three Sharing" },
            { count: "4", label: "Four Sharing" },
          ].map((s) => (
            <div
              key={s.count}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-orange-100 text-xl font-bold text-orange-500">
                {s.count}
              </span>
              <span className="font-medium text-slate-700">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Amenities Provided</h2>
        <p className="mt-1 text-slate-600">Everything you need for a comfortable stay.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🛡️", label: "Security - CCTV surveillance" },
            { icon: "🧹", label: "Regular housekeeping" },
            { icon: "❄️", label: "AC" },
            { icon: "📶", label: "High-speed WiFi" },
            { icon: "🚿", label: "Attached bathroom" },
            { icon: "🧺", label: "Washing machine" },
            { icon: "🧊", label: "Refrigerator" },
            { icon: "♨️", label: "Water heater" },
            { icon: "💧", label: "RO Water" },
            { icon: "🏙️", label: "Terrace" },
          ].map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
            >
              <span className="text-2xl">{a.icon}</span>
              <span className="font-medium text-slate-700">{a.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
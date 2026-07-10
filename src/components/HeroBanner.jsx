import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + dark overlay so white text stays readable */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=60"
          alt="Cozy PG room interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Browse verified PG accommodations across our locations. Compare rents, amenities, and facilities, then connect directly with property owners via WhatsApp or phone call for quick and hassle-free inquiries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/listings" className="rounded-lg bg-orange-400 px-6 py-3 font-semibold text-white shadow-lg hover:text-white-700">
              Browse Rooms
            </Link>
            <Link to="/map" className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">
              View Map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
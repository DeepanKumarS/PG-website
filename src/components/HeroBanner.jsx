import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + dark overlay so white text stays readable */}
      <div className="absolute inset-0">
        <img
          src="/Designer.png"
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
            Experience comfortable and affordable PG living with modern amenities, flexible room-sharing options, and a welcoming environment for students and working professionals.
          <br />
            Contact: 8825603397 | 9841447028
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
import { NavLink } from "react-router-dom";
import { site } from "../config/site";

export default function Header() {
  // NavLink hands us `isActive`; we return different classes for the active page.
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "bg-orange-400 text-black-600"
        : "text-slate-600 hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/letter-l.png" alt="Loyola PG" className="h-10 w-auto" />
          <span className="font-semibold text-black">Loyola PG</span>
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/listings" className={linkClass}>Listings</NavLink>
          <NavLink to="/map" className={linkClass}>Map</NavLink>
          <a
            href={`tel:+${site.phoneNumber}`}
            className="ml-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Call Us
          </a>
        </nav>
      </div>
    </header>
  );
}
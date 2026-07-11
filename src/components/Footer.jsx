import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg font-bold text-white">
              <img src="/letter-l.png" alt="Loyola PG" className="h-auto w-auto" />
            </span>
            <span className="text-lg font-bold text-slate-900">{site.brandName}</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{site.tagline}</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-900">Why choose us?</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span>🛡️</span> Safe and secure accommodation</li>
            <li className="flex items-center gap-2"><span>🧹</span> Clean and well-maintained rooms</li>
            <li className="flex items-center gap-2"><span>📶</span> High-speed Wi‑Fi</li>
            <li className="flex items-center gap-2"><span>🍽️</span> Home-style food</li>
            <li className="flex items-center gap-2"><span>📹</span> CCTV surveillance</li>
            <li className="flex items-center gap-2"><span>📍</span> Convenient location</li>
            <li className="flex items-center gap-2"><span>🤝</span> Friendly and responsive management</li>
          </ul>

        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/listings" className="hover:text-orange-600">Listings</Link></li>
            <li><Link to="/map" className="hover:text-orange-600">Map</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href={`tel:+${site.phoneNumber}`} className="hover:text-blue-600">Call: +{site.phoneNumber}</a></li>
            <li>
              <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-green-600">
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="text-lg font-bold text-slate-900">House Rules / Admission Policy</h3>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Admission Requirements</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Valid Government ID proof is mandatory.</li>
                <li>Address proof may be required during check-in.</li>
                <li>Tenant details will be verified before room allocation.</li>
                <li>One passport-size photograph may be required.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">PG Rules</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Rent must be paid on or before the due date.</li>
                <li>Visitors are allowed with prior notice. Any damage caused by visitors will be charged to the resident hosting them.</li>
                <li>The use or possession of illegal substances, narcotics, and prohibited drugs is strictly prohibited within the premises.</li>
                <li>Residents must maintain cleanliness and respect fellow occupants.</li>
                <li>Any damage to PG property will be chargeable.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-900">Check-In Requirements</h4>
            <blockquote className="mt-2 border-l-4 border-orange-300 bg-orange-50 px-4 py-3 text-sm text-slate-600">
              All residents must submit a valid government-issued ID (Aadhaar Card,
              Driving License, Passport, Voter ID, etc.) for verification before occupancy.
            </blockquote>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brandName}. All rights reserved.
        </p>
        <p className="mt-1 text-center text-xs text-slate-400">
          Disclaimer: Images shown on this website are for illustration purposes only. The actual rooms may differ from the images displayed.
        </p>
      </div>
    </footer>
  );
}
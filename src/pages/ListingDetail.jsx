import { useParams, Link } from "react-router-dom";
import { getRoomById, formatRent } from "../utils/data";
import EnquireButtons from "../components/EnquireButtons";
import ImageGallery from "../components/ImageGallery";
import MapView from "../components/MapView";

export default function ListingDetail() {
  const { id } = useParams();       // the :id from /listing/:id
  const room = getRoomById(id);     // look it up in the data

  // Open the maps app on phones (Google Maps on Android/iOS, with a web fallback);
  // open the Google Maps website on laptops.
  function openMaps(e) {
    e.preventDefault();
    const ua = navigator.userAgent;
    const web = `https://www.google.com/maps/search/?api=1&query=${room.lat},${room.lng}`;
    if (/Android/i.test(ua)) {
      window.location.href = `geo:${room.lat},${room.lng}?q=${room.lat},${room.lng}(${encodeURIComponent(room.areaName)})`;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      // Try the Google Maps app; if it isn't installed, fall back to the website.
      window.location.href = `comgooglemaps://?q=${room.lat},${room.lng}`;
      setTimeout(() => {
        window.location.href = web;
      }, 1200);
    } else {
      window.open(web, "_blank", "noopener,noreferrer");
    }
  }

  // Guard: if no room matches this id, show a friendly fallback.
  if (!room) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Room not found</h1>
        <p className="mt-2 text-slate-600">This listing may have been removed.</p>
        <Link to="/listings" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Back to Listings
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/listings" className="inline-flex items-center gap-1 rounded-lg bg-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
        ← Back to Listings
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <ImageGallery images={room.images} title={room.title} />

        {/* Details */}
        <div>
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              room.available ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"
            }`}>
              {room.available ? "Available" : "Waitlist"}
            </span>
            <span className="text-sm text-slate-500">{room.areaName}, {room.cityName}</span>
          </div>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">{room.title}</h1>
          <p className="mt-2 text-2xl font-bold text-blue-600">{formatRent(room.rent)}</p>
          <p className="mt-1 text-sm text-slate-500">{room.sharingType} sharing</p>

          {room.note && <p className="mt-4 text-slate-600">{room.note}</p>}

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">Amenities</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {room.amenities?.map((a) => (
              <li key={a} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{a}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold text-slate-900">Interested in this room?</h2>
            <p className="mt-1 text-sm text-slate-600">Reach out directly — no sign-up needed.</p>
            <div className="mt-4">
              <EnquireButtons roomTitle={room.title} />
            </div>
          </div>
        </div>
        </div>
              <div className="mt-10">
          <h2 className="text-lg font-bold text-slate-900">Location</h2>
          <p className="mt-1 text-sm text-slate-500">{room.areaName}, {room.cityName}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${room.lat},${room.lng}`}
            onClick={openMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            📍 Open in Google Maps
          </a>

          <div className="mt-3">
            <MapView
              center={[room.lat, room.lng]}
              markers={[{ id: room.id, lat: room.lat, lng: room.lng }]}
            />
          </div>
        </div>
        
    
    </section>
  );
}
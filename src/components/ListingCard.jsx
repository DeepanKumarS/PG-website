import { Link } from "react-router-dom";
import { formatRent } from "../utils/data";

export default function ListingCard({ room }) {
  const cover = room.images?.[0]; // first image, or undefined

  return (
    <Link
      to={`/listing/${room.uid}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {cover ? (
          <img
            src={cover}
            alt={room.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-slate-400">No image</div>
        )}

        {/* availability badge, top-left */}
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
            room.available ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"
          }`}
        >
          {room.available ? "Available" : "Waitlist"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-slate-900">{room.title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {room.areaName}, {room.cityName}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
            {room.sharingType} sharing
          </span>
          {room.amenities?.slice(0, 2).map((a) => (
            <span key={a} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
              {a}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <span className="text-lg font-bold text-slate-900">{formatRent(room.rent)}</span>
        </div>
      </div>
    </Link>
  );
}
import { Link } from "react-router-dom";

export default function CityCard({ city }) {
  // Grab the first available image to use as the card cover
  const cover = city.image ?? city.areas[0]?.rooms[0]?.images[0];

  return (
    <Link
      to={`/listings/${city.id}`}
      className="group relative block overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {cover ? (
          <img
            src={cover}
            alt={`Rooms in ${city.name}`}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-slate-400">No image</div>
        )}
      </div>

      {/* dark gradient so the white text is readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <h3 className="text-xl font-bold">{city.name}</h3>
        <p className="text-sm text-slate-200">
          {city.areas.length} areas
        </p>
      </div>
    </Link>
  );
}
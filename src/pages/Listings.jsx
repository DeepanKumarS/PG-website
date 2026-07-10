import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllRooms } from "../utils/data";
import ListingCard from "../components/ListingCard";
import FilterBar from "../components/FilterBar";

export default function Listings() {
  const { city } = useParams(); // "chennai" from /listings/chennai, or undefined

  // Start with the city from the URL (if any) pre-selected.
  const [filters, setFilters] = useState({ city: city || "", area: "", sharing: "" });

  // If the URL's city changes later, keep the filter in sync.
  useEffect(() => {
    setFilters((prev) => ({ ...prev, city: city || "", area: "" }));
  }, [city]);

  const rooms = getAllRooms().filter((room) => {
    if (filters.city && room.cityId !== filters.city) return false;
    if (filters.area && room.areaId !== filters.area) return false;
    if (filters.sharing && room.sharingType !== filters.sharing) return false;
    return true;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Available Rooms</h1>

      <div className="mt-4">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>

      <p className="mt-4 text-slate-600">{rooms.length} rooms found</p>

      {rooms.length === 0 ? (
        <p className="mt-8 rounded-lg bg-white p-8 text-center text-slate-500 ring-1 ring-slate-200">
          No rooms match your filters. Try changing them.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <ListingCard key={room.uid} room={room} />
          ))}
        </div>
      )}
    </section>
  );
}
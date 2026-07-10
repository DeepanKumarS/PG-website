import { useState } from "react";
import { cities } from "../data/listings";
import { getAllRooms } from "../utils/data";
import ListingCard from "../components/ListingCard";
import FilterBar from "../components/FilterBar";

export default function Listings() {
  const areas = cities[0].areas;

  // First area is selected by default.
  const [selectedArea, setSelectedArea] = useState(areas[0].id);

  const rooms = getAllRooms().filter((room) => room.areaId === selectedArea);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Available Rooms</h1>

      <div className="mt-4">
        <FilterBar areas={areas} selectedArea={selectedArea} onSelect={setSelectedArea} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room) => (
          <ListingCard key={room.uid} room={room} />
        ))}
      </div>
    </section>
  );
}
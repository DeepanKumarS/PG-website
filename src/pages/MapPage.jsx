import { getAllRooms, getStats } from "../utils/data";
import MapView from "../components/MapView";

export default function MapPage() {
  const rooms = getAllRooms();
  const { areas } = getStats();

  // Turn every room into a marker that also carries popup info.
  const markers = rooms.map((room) => ({
    id: room.uid,
    lat: room.lat,
    lng: room.lng,
    popup: {
      title: room.title,
      subtitle: `${room.areaName}, ${room.cityName}`,
      link: `/listing/${room.uid}`,
    },
  }));

  // Center on the first room (fallback coordinates if there are none).
  const center = rooms.length ? [rooms[0].lat, rooms[0].lng] : [12.95, 80.24];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Available locations in Chennai</h1>
      <p className="mt-1 text-slate-600">
        {areas} areas across our cities. Click a pin for details.
      </p>

      <div className="mt-6">
        <MapView center={center} zoom={11} markers={markers} height="70vh" />
      </div>
    </section>
  );
}
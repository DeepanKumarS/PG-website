// A full-width box with one button per area.
export default function FilterBar({ areas, selectedArea, onSelect }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-2 gap-3">
        {areas.map((area) => {
          const active = selectedArea === area.id;
          return (
            <button
              key={area.id}
              onClick={() => onSelect(area.id)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                active
                  ? "bg-orange-400 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-100"
              }`}
            >
              {area.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
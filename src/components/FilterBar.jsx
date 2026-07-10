import { cities } from "../data/listings";
import { getSharingTypes } from "../utils/data";

// A "controlled" component: the parent owns the state and passes it in.
export default function FilterBar({ filters, onChange }) {
  const sharingTypes = getSharingTypes();
  const selectedCity = cities.find((c) => c.id === filters.city);
  const areas = selectedCity ? selectedCity.areas : [];

  function update(key, value) {
    if (key === "city") {
      // When city changes, clear the area (its old area no longer applies)
      onChange({ ...filters, city: value, area: "" });
    } else {
      onChange({ ...filters, [key]: value });
    }
  }

  const selectClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">City</label>
          <select value={filters.city} onChange={(e) => update("city", e.target.value)} className={selectClass}>
            <option value="">All cities</option>
            {cities.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Area</label>
          <select
            value={filters.area}
            onChange={(e) => update("area", e.target.value)}
            disabled={!selectedCity}
            className={`${selectClass} disabled:bg-slate-100`}
          >
            <option value="">{selectedCity ? "All areas" : "Select a city first"}</option>
            {areas.map((a) => (<option key={a.id} value={a.id}>{a.name}</option>))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Sharing type</label>
          <select value={filters.sharing} onChange={(e) => update("sharing", e.target.value)} className={selectClass}>
            <option value="">All types</option>
            {sharingTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </div>
      </div>
    </div>
  );
}
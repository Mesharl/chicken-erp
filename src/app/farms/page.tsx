import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { farms } from "@/lib/mock-data";

export default function FarmsPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Farms"
        description="Manage farms, houses, capacity and operational performance."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Add farm
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Houses</th>
                <th className="px-5 py-3 font-medium">Birds</th>
                <th className="px-5 py-3 font-medium">Production</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {farms.map((f) => (
                <tr key={f.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5 font-medium">{f.name}</td>
                  <td className="px-5 py-3.5 text-[var(--muted)]">{f.location}</td>
                  <td className="px-5 py-3.5">{f.houses}</td>
                  <td className="px-5 py-3.5">{f.birds.toLocaleString()}</td>
                  <td className="px-5 py-3.5">{f.production}</td>
                  <td className="px-5 py-3.5">
                    <Badge tone="success">{f.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { flocks } from "@/lib/mock-data";

export default function FlocksPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Flocks"
        description="Track batches from placement through production, sale or culling."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Place flock
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Code</th>
                <th className="px-5 py-3 font-medium">Farm / House</th>
                <th className="px-5 py-3 font-medium">Breed</th>
                <th className="px-5 py-3 font-medium">Purpose</th>
                <th className="px-5 py-3 font-medium">Current</th>
                <th className="px-5 py-3 font-medium">Age (days)</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {flocks.map((f) => (
                <tr key={f.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5 font-medium">{f.code}</td>
                  <td className="px-5 py-3.5">
                    {f.farm} / {f.house}
                  </td>
                  <td className="px-5 py-3.5">{f.breed}</td>
                  <td className="px-5 py-3.5">{f.purpose}</td>
                  <td className="px-5 py-3.5">
                    {f.current.toLocaleString()}
                    <span className="text-[var(--muted)]"> / {f.placed.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-3.5">{f.ageDays}</td>
                  <td className="px-5 py-3.5">
                    <Badge tone={f.status === "Laying" ? "success" : "accent"}>{f.status}</Badge>
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

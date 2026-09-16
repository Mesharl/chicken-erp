import { PageHeader } from "@/components/page-header";
import { productionRows } from "@/lib/mock-data";

export default function ProductionPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Production"
        description="Capture egg collection, grading, wastage and production rates."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Record collection
          </button>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <div className="text-sm text-[var(--muted)]">Eggs today</div>
          <div className="mt-1 text-2xl font-bold">18,420</div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <div className="text-sm text-[var(--muted)]">Production rate</div>
          <div className="mt-1 text-2xl font-bold">74.1%</div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <div className="text-sm text-[var(--muted)]">Cracked / waste</div>
          <div className="mt-1 text-2xl font-bold">1.3%</div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Flock</th>
                <th className="px-5 py-3 font-medium">Eggs</th>
                <th className="px-5 py-3 font-medium">Cracked</th>
                <th className="px-5 py-3 font-medium">Rate</th>
              </tr>
            </thead>
            <tbody>
              {productionRows.map((r) => (
                <tr key={r.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5">{r.date}</td>
                  <td className="px-5 py-3.5 font-medium">{r.flock}</td>
                  <td className="px-5 py-3.5">{r.eggs.toLocaleString()}</td>
                  <td className="px-5 py-3.5">{r.cracked}</td>
                  <td className="px-5 py-3.5">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

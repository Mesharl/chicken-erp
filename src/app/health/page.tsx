import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { healthRecords } from "@/lib/mock-data";

export default function HealthPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Health"
        description="Vaccinations, treatments and disease incidents by flock."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Add record
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Flock</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Detail</th>
                <th className="px-5 py-3 font-medium">Recorded by</th>
              </tr>
            </thead>
            <tbody>
              {healthRecords.map((r) => (
                <tr key={r.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5">{r.date}</td>
                  <td className="px-5 py-3.5 font-medium">{r.flock}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      tone={
                        r.type === "Incident"
                          ? "warning"
                          : r.type === "Treatment"
                            ? "accent"
                            : "success"
                      }
                    >
                      {r.type}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">{r.detail}</td>
                  <td className="px-5 py-3.5 text-[var(--muted)]">{r.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { employees } from "@/lib/mock-data";

export default function EmployeesPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Employees"
        description="Team members, roles and farm assignments."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Add employee
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Farm</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <tr key={e.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5 font-medium">{e.name}</td>
                  <td className="px-5 py-3.5">{e.role}</td>
                  <td className="px-5 py-3.5">{e.farm}</td>
                  <td className="px-5 py-3.5 text-[var(--muted)]">{e.phone}</td>
                  <td className="px-5 py-3.5">
                    <Badge tone="success">{e.status}</Badge>
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

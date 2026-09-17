import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function EmployeesPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Employees"
        description="Manage people who work on your farm and their access to the system."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Add employee
          </button>
        }
      />
      <EmptyState
        title="No employees added"
        description="Add your farm team when you are ready. Your account remains the primary farm account."
      />
    </div>
  );
}

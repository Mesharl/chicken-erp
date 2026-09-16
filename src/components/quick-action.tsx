import Link from "next/link";

export function QuickAction({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-[var(--border)] bg-white p-4 text-sm font-semibold shadow-sm transition hover:border-[var(--accent)] hover:shadow"
    >
      + {label}
    </Link>
  );
}

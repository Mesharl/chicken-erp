"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Bird,
  Egg,
  Wheat,
  HeartPulse,
  Boxes,
  ShoppingCart,
  Receipt,
  Users,
  BarChart3,
  Settings
} from "lucide-react";

const items = [
  ["Dashboard", "/", LayoutDashboard],
  ["Farm", "/farms", Building2],
  ["Flocks", "/flocks", Bird],
  ["Production", "/production", Egg],
  ["Feed", "/feed", Wheat],
  ["Health", "/health", HeartPulse],
  ["Inventory", "/inventory", Boxes],
  ["Purchasing", "/purchasing", ShoppingCart],
  ["Sales", "/sales", Receipt],
  ["Employees", "/employees", Users],
  ["Reports", "/reports", BarChart3],
  ["Settings", "/settings", Settings]
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-[var(--border)] bg-white p-4 md:flex md:flex-col">
      <div className="mb-8 border-b border-[var(--border)] px-3 pb-5">
        <div className="text-lg font-semibold tracking-tight">Mama Suubi&apos;s Farm</div>
        <div className="mt-1 text-xs text-[var(--muted)]">Poultry farm management</div>
      </div>
      <nav className="space-y-1">
        {items.map(([label, href, Icon]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-[var(--accent)] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} strokeWidth={1.8} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-[var(--border)] px-3 pt-5 text-xs text-[var(--muted)]">
        Single farm workspace
      </div>
    </aside>
  );
}

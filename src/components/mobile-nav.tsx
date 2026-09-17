"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Bird,
  Egg,
  Boxes,
  MoreHorizontal
} from "lucide-react";

const items = [
  ["Home", "/", LayoutDashboard],
  ["Farm", "/farms", Building2],
  ["Flocks", "/flocks", Bird],
  ["Eggs", "/production", Egg],
  ["Stock", "/inventory", Boxes],
  ["More", "/settings", MoreHorizontal]
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-white px-2 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex items-center justify-around py-2">
        {items.map(([label, href, Icon]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-2 py-1 text-[10px] ${
                active ? "text-[var(--accent)]" : "text-[var(--muted)]"
              }`}
            >
              <Icon size={20} strokeWidth={1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

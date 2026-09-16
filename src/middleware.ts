import { NextResponse, type NextRequest } from "next/server";

/**
 * Placeholder middleware for session refresh and route protection.
 * Wire Supabase auth helpers here when NEXT_PUBLIC_SUPABASE_URL is configured.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/health|login).*)"
  ]
};

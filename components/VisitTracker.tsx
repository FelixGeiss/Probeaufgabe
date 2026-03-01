"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Tracks client-side route changes and reports them to the visits API.
 *
 * @remarks
 * This component intentionally renders nothing. It exists only to trigger
 * the side effect that records each route change.
 *
 * @returns `null`, because the component has no visual output.
 */
export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    void fetch("/api/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: pathname }),
    });
  }, [pathname]);

  return null;
}

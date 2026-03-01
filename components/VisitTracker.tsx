"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitTracker() {
  // Den aktuellen URL-Pfad aus dem Next.js App Router lesen.
  const pathname = usePathname();

  useEffect(() => {
    // Bei jedem Seitenwechsel einen neuen Visit an die API melden.
    void fetch("/api/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: pathname }),
    });
  }, [pathname]);

  // Die Komponente rendert nichts sichtbar; sie dient nur dem Tracking.
  return null;
}

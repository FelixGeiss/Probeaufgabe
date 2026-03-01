"use client";

import { useEffect, useState } from "react";

/**
 * Displays the live visitor count in the footer.
 *
 * @returns A text node with the latest visitor count.
 */
export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    /**
     * Fetches the latest visitor count from the API.
     *
     * @returns A promise that resolves after the fetch and optional state update.
     */
    async function loadVisitorCount() {
      const response = await fetch("/api/visits/count", {
        cache: "no-store",
      });

      if (!response.ok) {
        return;
      }

      const data: { visitorCount: number } = await response.json();

      if (isActive) {
        setVisitorCount(data.visitorCount);
      }
    }

    void loadVisitorCount();

    // Poll every 5 seconds so newly tracked visits become visible.
    const interval = setInterval(() => {
      void loadVisitorCount();
    }, 5000);

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  return <p className="footer-text text-sm">{visitorCount} Visitors</p>;
}

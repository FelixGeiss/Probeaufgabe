"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  // Lokaler State für die aktuell angezeigte Besucherzahl.
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Verhindert ein State Update, falls die Komponente entfernt wurde.
    let isActive = true;

    async function loadVisitorCount() {
      // Die aktuelle Besucherzahl von der API laden.
      const response = await fetch("/api/visits/count", {
        cache: "no-store",
      });

      // Bei einer Fehlerantwort nichts weiter ausführen.
      if (!response.ok) {
        return;
      }

      // Die JSON Antwort lesen und typisieren.
      const data: { visitorCount: number } = await response.json();

      // Den State nur setzen, solange die Komponente noch aktiv ist.
      if (isActive) {
        setVisitorCount(data.visitorCount);
      }
    }

    // Direkt beim ersten Rendern einmal laden.
    void loadVisitorCount();

    // Danach regelmäßig aktualisieren, damit neue Besuche sichtbar werden.
    const interval = setInterval(() => {
      void loadVisitorCount();
    }, 5000);

    // Beim Unmount Intervall stoppen und weitere Updates verhindern.
    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  // Die aktuelle Besucherzahl im Footer anzeigen.
  return <p className="footer-text text-sm">{visitorCount} Visitors</p>;
}

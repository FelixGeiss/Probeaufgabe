 "use client";

import { useEffect, useState } from "react";

export default function Footer() {
  // Lokaler State fuer die aktuell angezeigte Besucherzahl.
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Verhindert ein State-Update, falls die Komponente schon entfernt wurde.
    let isActive = true;

    async function loadVisitorCount() {
      // Frische Daten von der eigenen API holen.
      const response = await fetch("/api/visits/count", {
        cache: "no-store",
      });

      // Bei einer Fehlerantwort nichts weiter ausführen.
      if (!response.ok) {
        return;
      }

      // JSON Antwort lesen und typisieren.
      const data: { visitorCount: number } = await response.json();

      // State nur setzen, solange die Komponente noch aktiv ist.
      if (isActive) {
        setVisitorCount(data.visitorCount);
      }
    }

    // Direkt beim ersten Rendern einmal laden.
    void loadVisitorCount();

    // Danach alle 5 Sekunden neu laden.
    const interval = setInterval(() => {
      void loadVisitorCount();
    }, 5000);

    // Cleanup: Intervall stoppen und weitere State Updates verhindern.
    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="w-full border-t bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <p className="text-sm text-zinc-300">{visitorCount} Besucher</p>
      </div>
    </footer>
  );
}

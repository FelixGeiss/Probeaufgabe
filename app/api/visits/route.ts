import { addVisit } from "@/lib/visitRepository";

export async function POST(request: Request) {
  // JSON Body lesen; bei leerem oder ungültigem Body auf null zurückfallen.
  const body = (await request.json().catch(() => null)) as
    | { path?: string }
    | null;
  // Den übergebenen Pfad verwenden, sonst die Startseite als Standardwert.
  const path = body?.path?.trim() || "/";

  // Den Seitenaufruf serverseitig in der Datenbank speichern.
  await addVisit(path);

  // Eine einfache Erfolgsantwort an den Browser zurückgeben.
  return Response.json({ ok: true });
}

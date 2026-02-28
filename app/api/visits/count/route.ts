import { fetchVisitorCount } from "@/lib/visitRepository";

export async function GET() {
  // Die API-Route holt den aktuellen Besucherzähler serverseitig.
  const visitorCount = await fetchVisitorCount();

  // Als JSON an den Browser zurückgeben.
  return Response.json({ visitorCount });
}

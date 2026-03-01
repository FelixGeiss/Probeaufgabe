import { fetchVisitorCount } from "@/lib/visitRepository";

/**
 * Returns the current visitor count.
 *
 * @returns A JSON response with the current number of visits.
 */
export async function GET() {
  const visitorCount = await fetchVisitorCount();

  return Response.json({ visitorCount });
}

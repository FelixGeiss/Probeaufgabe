import { addVisit } from "@/lib/visitRepository";

/**
 * Stores a visit for the path provided by the client request body.
 *
 * @param request The incoming POST request.
 * @returns A JSON response confirming that the visit was stored.
 */
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { path?: string }
    | null;
  const path = body?.path?.trim() || "/";

  await addVisit(path);

  return Response.json({ ok: true });
}

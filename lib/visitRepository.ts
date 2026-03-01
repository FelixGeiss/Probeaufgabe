import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

/**
 * Stores a Prisma client instance on the global object in development to avoid
 * recreating the client during hot reloads.
 *
 * @remarks
 * Next.js hot reloading can re-evaluate modules repeatedly in development.
 * Caching the client prevents opening multiple Prisma clients unnecessarily.
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Returns all persisted visit records.
 *
 * @returns All visit rows currently stored in the database.
 */
export async function fetchVisits() {
  const visits = await prisma.visit.findMany();
  return visits;
}

/**
 * Returns the total number of stored visits.
 *
 * @returns The current visit count.
 */
export async function fetchVisitorCount() {
  const visitorCount = await prisma.visit.count();
  return visitorCount;
}

/**
 * Persists a new visit record for the provided route path.
 *
 * @param path The visited route path.
 * @returns A promise that resolves after the record has been written.
 */
export async function addVisit(path: string) {
  await prisma.visit.create({
    data: {
      path,
    },
  });
}

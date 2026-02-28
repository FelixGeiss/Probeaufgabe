import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// In Development wird die Prisma-Instanz auf globalThis zwischengespeichert,
// damit bei Hot Reload nicht immer ein neuer Client erstellt wird.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

// Vorhandene Instanz wiederverwenden, sonst eine neue erzeugen.
const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function fetchVisits() {
  // Alle Visit Einträge laden.
  const visits = await prisma.visit.findMany();
  return visits;
}

export async function fetchVisitorCount() {
  // Die Datenbank liefert direkt nur die Anzahl zurück.
  const visitorCount = await prisma.visit.count();
  return visitorCount;
}

# Mein Projekt

This project is a small Next.js application that displays a Chuck Norris joke,
renders a responsive hero image, and tracks page visits in a SQLite database via
Prisma.

## Features

- Server-rendered initial joke on the home page
- Client-side button to load a new joke
- Visit tracking for route changes
- Visitor counter in the footer
- Responsive layout with Tailwind CSS

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Prisma
- SQLite

## Getting Started

Install dependencies:

```bash
npm install
```

Create an `.env` file if you do not already have one and set the database URL:

```env
DATABASE_URL="file:./dev.db"
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm run start
```

Starts the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

- `app/`
  Contains routes, layout, and API endpoints.
- `components/`
  Contains UI components such as the hero image, jokes section, footer, and
  visit tracker.
- `lib/`
  Contains API helpers and Prisma database access logic.
- `types/`
  Contains shared TypeScript types.
- `prisma/`
  Contains the Prisma schema and migrations.

## Visit Tracking

Client-side route changes are tracked by `VisitTracker`. Each route change sends
a `POST` request to `/api/visits`, which stores the visited path in the
database. The footer polls `/api/visits/count` to display the latest visitor
count.

## Notes

- `dev.db` is a local SQLite database file and should not be committed.
- Prisma is used only on the server side.
- The generated `docs/` folder is build output if documentation is generated and
  should be treated as generated content.

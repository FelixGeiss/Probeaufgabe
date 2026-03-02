# Mein Projekt

This project is a small Next.js application that displays a Chuck Norris joke, renders a responsive image, and stores page visits in a SQLite database via Prisma.

## Features

- Server-rendered initial joke on the home page
- Client-side button to load a new joke
- Page visit tracking on route changes
- Visitor counter in the footer
- Responsive layout with Tailwind CSS

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Prisma
- SQLite

## Setup

Install dependencies:

```bash
npm install
```

Create an `.env` file if it does not already exist and set the database URL:

```env
DATABASE_URL="file:./dev.db"
```

If the Prisma Client has not been generated yet or the Prisma schema changed, run:

```bash
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

The application will then be available at `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates the production build.

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
  Contains UI components such as the image, joke section, footer, and visit tracker.
- `lib/`
  Contains API helpers and the Prisma logic for database access.
- `types/`
  Contains shared TypeScript types.
- `prisma/`
  Contains the Prisma schema.

## Visit Tracking

Client-side route changes are tracked by `VisitTracker`. On each route change, a `POST` request is sent to `/api/visits`, which stores the visited path in the database. The footer fetches the current visitor count from `/api/visits/count` and displays it.

## Notes

- `dev.db` is a local SQLite file and should not be committed to the repository.
- Prisma is only used on the server side.

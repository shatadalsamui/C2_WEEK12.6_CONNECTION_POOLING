# Database Connection Pooling Implementation

A project demonstrating efficient database connection pooling techniques.

## Tech Stack

- Node.js
- Prisma ORM
- TypeScript
- Cloudflare Workers (based on wrangler.jsonc)

## Features

- Database connection pooling
- Prisma migrations
- Type-safe database access
- Worker-based architecture

## Installation

```bash
cd app
npm install
```

## Configuration

1. Set up database connection in `.env`
2. Configure Prisma client in `prisma/schema.prisma`

## Running the Application

```bash
npm run dev
```

## Project Structure

- `app/`: Main application code
  - `prisma/`: Database schema and migrations
  - `src/`: Application source code
  - `test/`: Test cases

## Database Setup

1. Run migrations:
```bash
npx prisma migrate dev
```

2. Generate Prisma client:
```bash
npx prisma generate
```

## Contribution

Pull requests welcome. Follow existing patterns for connection management.

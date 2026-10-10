# Ecommerce Store

A modern ecommerce application built with Next.js, TypeScript, and a robust tech stack.

## Tech Stack

- **Framework**: Next.js 16.4 with App Router
- **Language**: TypeScript 5.7
- **UI Library**: React 19 (stable)
- **Styling**: Tailwind CSS 4.1
- **Authentication**: Better Auth 1.51
- **ORM**: Drizzle ORM 0.38
- **Database**: PostgreSQL via Neon (postgres-js driver)
- **Forms**: React Hook Form 7.56 + Zod 3.24

## Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your `DATABASE_URL` and `BETTER_AUTH_SECRET`

3. Push database schema:
   ```bash
   npm run db:push
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server at :3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint & TypeScript check
- `npm run db:generate` - Generate migration files from schema changes
- `npm run db:push` - Apply migrations to database
- `npm run db:studio` - Open Drizzle Studio for data inspection

## Project Structure

```
src/
├── app/           # Next.js app directory
├── db/            # Database schema and migrations
├── lib/           # Utilities and configurations
└── components/    # React components
```

## Next Steps

- Extend database schema in `src/db/schema.ts`
- Configure Better Auth providers
- Create API routes in `src/app/api`
- Build UI components in `src/components`

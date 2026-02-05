# Lexa Invoice App – Frontend

Minimalistic, fast SPA frontend for the **Lexa Invoice App**, built with React, React Router, Tailwind, and Better Auth. Focused on UX, performance, and type safety.

---

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router (SPA)
- **Styling**: Tailwind CSS + Radix UI + CVA
- **State & Data**: React Query
- **Forms & Validation**: React Hook Form + Zod
- **Auth**: Better Auth (client-side)
- **UI/UX**: Motion, Sonner, Lucide, Vaul
- **Tooling**: TypeScript, ESLint, Prettier

---

## App Flow

```
UI → Auth (Better Auth) → React Query → API → Backend
```

- **Auth**: client-side session handling, protected routes
- **Data**: React Query for fetching, caching, and mutations
- **Validation**: Zod + React Hook Form on client side
- **Performance**: memoization and caching where needed
- **UX**: full handling of loading, empty, error, and 404 states

---

## Core Features

- Login / Register / Logout (Better Auth)
- Protected routes and user-scoped data
- Invoice management: create, edit, delete, update status, dynamic items
- Dark mode (toggle via `Cmd + M`)
- Fully typed codebase (TypeScript)
- High-performance UI with caching and memoization

---

## Dependencies (core)

- React, React Router, Tailwind CSS, Radix UI
- React Query, Better Auth
- React Hook Form, Zod
- Motion, Sonner, Lucide

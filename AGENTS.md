# Developer & AI Agent Context Guidelines

## Technology Stack
- **Framework:** Next.js (App Router, Server Components by default)
- **CMS:** Sanity Studio v3 (embedded via `next-sanity`)
- **Styling:** Tailwind CSS, Lucide React icons
- **Target Institution:** Department of Intelligent Systems, Obafemi Awolowo University (OAU)

## Architecture Rules
1. **Server vs Client Components:**
   - Keep page-level data fetching inside Server Components (`src/app/.../page.tsx`).
   - Use `"use client"` strictly for interactive UI components (e.g., search bars, mobile navigation toggles, upvote buttons).
2. **Sanity Data Fetching:**
   - Write GROQ queries inside dedicated utility modules (`src/sanity/lib/queries.ts`).
   - Use typed GROQ fetches with Next.js caching (`useCache` / `revalidateTag`).
3. **Styling Standards:**
   - Follow OAU's institutional color scheme: Deep Navy (`#00205B`), Gold/Yellow accents (`#D4AF37`), and Neutral Grays.
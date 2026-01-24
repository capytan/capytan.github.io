# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Linktree-style personal link collection site built with Next.js. Deployed as a static site to GitHub Pages.

## Commands

```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production (outputs to ./out)
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting without modifying
```

## Architecture

**App Structure (Next.js App Router)**
- `app/page.tsx` - Home page, renders profile and link cards
- `app/layout.tsx` - Root layout with theme provider
- `app/components/ui/` - UI components (profile, link-card, theme-switch, share-button)
- `app/components/providers.tsx` - ThemeProvider wrapper

**Configuration**
- `config/site.ts` - Profile info (name, description, image) and site metadata
- `config/links.ts` - Array of links to display (title, url, icon)
- `config/theme.ts` - Theme/color configuration

**Types**
- `types/index.ts` - Shared TypeScript type definitions

**Static Export**
- `next.config.js` uses `output: 'export'` for static site generation
- Images are unoptimized for GitHub Pages compatibility

## Deployment

Pushes to `main` trigger automatic deployment to GitHub Pages via `.github/workflows/deploy.yml`.

## Development Guidelines

- **UI/UX changes require approval** - Do not modify layout, colors, fonts, or spacing without explicit permission
- **Version changes require approval** - Do not upgrade dependencies or change tech stack versions
- **Check for duplicates** - Before implementing, verify no similar functionality exists
- Use Tailwind CSS for styling (shadcn/ui components available)
- Use Next.js Image component for images in `public/images/`

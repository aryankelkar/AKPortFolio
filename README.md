# Aryan Kelkar — Personal Portfolio & Technical Archive

> A cinematic, editorial, typography-driven personal portfolio and digital technical archive built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion for React**.

Designed with **"The Personal Archive"** aesthetic: combining editorial design, typography-led compositions, restrained motion, and technical storytelling in a deep dark blue and muted violet palette.

---

## 🎨 Color System Tokens

| Token | Name | HEX | RGB | Role |
| :--- | :--- | :--- | :--- | :--- |
| `--background` | **Chinese Black** | `#0A1123` | `10, 17, 35` | Primary deep atmosphere base |
| `--surface` | **American Blue** | `#3A3E6C` | `58, 62, 108` | Primary elevation & interactive headers |
| `--primary` / `--accent` | **Ube** | `#8387C3` | `131, 135, 195` | Muted violet highlights & badges |
| `--muted` | **Cool Grey** | `#8A8CAC` | `138, 140, 172` | Subtle borders, meta text & dates |
| `--text-secondary` | **Cadet Grey** | `#959BB5` | `149, 155, 181` | Body reading text & subtitles |
| `--text-primary` | **Soft Lavender White** | `#E7E7F0` | `231, 231, 240` | Glowing editorial titles & contrast |

---

## 📂 Site & Route Architecture

```
/
├── /about                -> In-depth biography, academic background, intellectual focus
├── /work                 -> Complete project repository with category filters
├── /work/[slug]          -> Deep-dive case studies with architectures, trade-offs & metrics
│   ├── /work/redevice
│   ├── /work/banksense-ai
│   ├── /work/janaarogya
│   ├── /work/eklavya
│   ├── /work/smart-evacuation-router
│   ├── /work/campusplay
│   └── /work/krishimitra
├── /archive              -> Filterable certifications, hackathons & academic honors (canonical)
├── /achievements         -> Automatic HTTP 307 redirect to /archive
├── /journey              -> Chronological education & systems engineering timeline
├── /activities           -> Extracurricular student leadership & civic initiatives
├── /contact              -> Direct transmission form & verified communication links
├── /api/contact          -> Form validation and dispatch endpoint
├── /sitemap.xml          -> Automated dynamic search crawler sitemap
├── /robots.txt           -> Search engine indexing directives
└── /resume.pdf           -> Verified Curriculum Vitae document download
```

---

## ☁️ Vercel Deployment Guide

This portfolio is built on **Next.js 16 (App Router)** and is 100% pre-configured for Vercel deployment with zero custom server hacks.

### Method 1: Git Integration (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects **Next.js**:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build` (or `npm run build`)
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
4. Under **Environment Variables**, optionally set:
   - `NEXT_PUBLIC_SITE_URL`: `https://aryankelkar.dev` (or your custom domain)
5. Click **Deploy**. Vercel will build all static pages and deploy the serverless contact endpoint in ~1 minute.

### Method 2: Vercel CLI
```bash
# Login to Vercel account
npx vercel login

# Link and deploy preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.19)
- npm 9+ (tested on npm 11.17)

### Installation
```bash
# Install dependencies
npm install
```

### Running Locally (Development Mode)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
# Run ESLint validation
npm run lint

# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📝 Customization & Asset Replacement

1. **Personal Information & Bio:**
   Edit [`src/data/profile.ts`](src/data/profile.ts) to update your name, email, GitHub/LinkedIn links, and biographical statements.

2. **Official Résumé:**
   Replace the placeholder [`public/resume.pdf`](public/resume.pdf) with your actual PDF document.

3. **Projects & Case Studies:**
   Add or update projects in [`src/data/projects.ts`](src/data/projects.ts). Every project automatically gains a dynamic `/work/[slug]` route with architecture blueprints, metrics, and challenge breakdowns.

4. **Certifications & Achievements:**
   Update records and verification URLs in [`src/data/achievements.ts`](src/data/achievements.ts).

5. **Extracurricular Activities:**
   Update leadership roles and event contributions in [`src/data/activities.ts`](src/data/activities.ts).

---

## 🛡️ License

Private personal portfolio developed for Aryan Kelkar. All rights reserved.

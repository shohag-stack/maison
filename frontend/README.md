# Maison — Restaurant & Café Next.js Template

A modern, elegant Next.js template for restaurants and cafés, powered by Sanity CMS. Maison combines stunning visuals with a seamless content management experience — perfect for fine dining, casual cafés, and everything in between.

---

## ✨ Features

- **Sanity CMS Integration** — Manage all content (menus, gallery, team, etc.) from a clean studio dashboard
- **Smooth Animations** — GSAP & Framer Motion powered transitions and scroll effects
- **Smooth Scroll** — Lenis-based smooth scrolling for a premium feel
- **Interactive Timeline** — Animated About page with the restaurant's story
- **Featured Dishes Section** — Highlight signature platters with images and descriptions
- **Full Menu Page** — Organized menu with categories, powered by Sanity
- **Gallery Page** — Masonry-style photo gallery with category filtering
- **Reservation Page** — Fully functional reservation form with React Hook Form
- **Contact Page** — Contact form integrated with Resend for email delivery
- **Testimonials Section** — Customer reviews section on the homepage
- **Stats Bar** — Highlight key numbers (years open, dishes served, awards, etc.)
- **Embla Carousel** — Smooth, touch-friendly carousels
- **Fully Responsive** — Mobile-first design across all screen sizes
- **TypeScript** — Fully typed codebase
- **Tailwind CSS v4** — Utility-first styling with the latest Tailwind

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, About preview, Stats, Featured Dishes, Reservation CTA, Testimonials, CTA |
| About | `/about` | Full story with interactive animated timeline |
| Menu | `/menu` | Complete menu with categories from Sanity |
| Gallery | `/gallery` | Photo gallery with category filter |
| Reservations | `/reservations` | Table booking form |
| Contact | `/contact` | Contact form with email via Resend |

---

## 🛠 Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router)
- **CMS** — [Sanity v3](https://www.sanity.io/)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** — [GSAP](https://greensock.com/gsap/) + [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll** — [Lenis](https://github.com/darkroomengineering/lenis)
- **Carousel** — [Embla Carousel](https://www.embla-carousel.com/)
- **Forms** — [React Hook Form](https://react-hook-form.com/)
- **Email** — [Resend](https://resend.com/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Language** — TypeScript

---

## 📁 Project Structure

```
maison/
├── frontend/                  # Next.js app
│   ├── app/                   # App Router pages & layouts
│   │   ├── page.tsx           # Home page
│   │   ├── about/
│   │   ├── menu/
│   │   ├── gallery/
│   │   ├── reservations/
│   │   └── contact/
│   ├── components/            # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── StatsBar.tsx
│   │   ├── FeaturedDishes.tsx
│   │   ├── ReservationCta.tsx
│   │   ├── Testimonials.tsx
│   │   └── CtaSection.tsx
│   ├── sanity/                # Sanity client & helpers
│   └── public/
└── sanity-studio/             # Sanity Studio (CMS)
    └── schemaTypes/           # Content schemas
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Sanity](https://www.sanity.io/) account (free)
- A [Resend](https://resend.com/) account for contact form emails (free tier available)

### 1. Install dependencies

```bash
# Frontend
cd frontend
npm install --legacy-peer-deps

# Sanity Studio
cd ../sanity-studio
npm install
```

### 2. Set up environment variables

Create a `.env.local` file inside the `frontend/` folder:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
RESEND_API_KEY=your_resend_api_key
```

You can find your `SANITY_PROJECT_ID` in your [Sanity dashboard](https://sanity.io/manage).

### 3. Run the development server

```bash
# Start frontend
cd frontend
npm run dev

# In a separate terminal, start Sanity Studio
cd sanity-studio
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3333](http://localhost:3333)

### 4. Add content in Sanity Studio

Open Sanity Studio and populate your content — menus, gallery images, team members, testimonials, and more.

---

## ☁️ Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "initial commit"
git push
```

### 2. Import project in Vercel

Go to [vercel.com](https://vercel.com), import your GitHub repo, and configure:

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install --legacy-peer-deps` |

### 3. Add environment variables

In Vercel → Settings → Environment Variables, add all variables from your `.env.local`.

### 4. Deploy

Hit **Deploy** and your site will be live.

---

## 🎨 Customization

### Fonts & Colors

Edit `frontend/app/globals.css` to update the color palette and typography.

### Content Schemas

Edit or extend schemas in `sanity-studio/schemaTypes/` to add new content types.

### Logo & Branding

Replace the logo in `frontend/public/` and update references in the `Header` component.

---

## 📦 What's Included

- ✅ Full Next.js 16 App Router setup
- ✅ Sanity Studio with pre-built schemas
- ✅ 6 fully built pages
- ✅ Reusable component library
- ✅ Animation utilities (GSAP + Framer Motion)
- ✅ Contact form with email delivery
- ✅ Reservation form
- ✅ Responsive navigation & footer
- ✅ SEO-ready structure
- ✅ TypeScript throughout

---

## 📬 Support

If you have any questions or run into issues, feel free to reach out via the support channel on the marketplace.

---

## 📝 License

This template is licensed for use on a single project. Please refer to the license file included with your purchase for full terms.
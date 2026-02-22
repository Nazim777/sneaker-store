# KICKS — Sneaker Store

A modern sneaker e-commerce web app built as part of the Zavisoft Frontend Implementation Task.

## 🛠 Tech Stack

| Category       | Tool                    |
|----------------|-------------------------|
| Framework      | Next.js 14 (App Router) |
| Language       | TypeScript              |
| Styling        | Tailwind CSS            |
| State Mgmt     | Context API             |
| Data Fetching  | Axios                   |
| Font           | Barlow Condensed + Space Grotesk |

## 📁 Project Structure

```
project-root/
│
├── .next/
│
├── app/
│   ├── cart/
│   │   └── page.tsx
│   │
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── providers/
│   │   └── cartProvider.tsx
│   │
│   ├── sections/
│   │   ├── CategoriesSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NewDropsSection.tsx
│   │   ├── ProductSuggest.tsx
│   │   └── ReviewsSection.tsx
│   │
│   └── ui/
│       └── Cards.tsx
│
├── features/
│   ├── cart/
│   │   ├── components/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartPage.tsx
│   │   │   ├── CartPageSkeleton.tsx
│   │   │   ├── EmptyCart.tsx
│   │   │   └── OrderSummary.tsx
│   │   │
│   │   └── types/
│   │       └── index.ts
│   │
│   └── products/
│       ├── components/
│       │   ├── ProductAbout.tsx
│       │   ├── ProductDetailSkeleton.tsx
│       │   ├── ProductDetailPage.tsx
│       │   ├── ProductGallery.tsx
│       │   ├── ProductInfo.tsx
│       │   └── ProductCardSkeleton.tsx
│       │
│       └── types/
│           └── index.ts
│
├── lib/
│   ├── hooks/
│   │   └── useData.ts
│   │
│   ├── api/
│   │   └── client.ts
│   │
│   ├── constants/
│   │   ├── colors.ts
│   │   ├── reviews.ts
│   │   └── sizes.ts
│   │
│   └── utils/
│       └── helper.ts
│
├── public/
│   └── modules/
│
├── types/
│   └── index.ts
│
├── .env
├── .env.example
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone / unzip the project
cd sneaker-store

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

### 1. Landing Page (`/`)
- **Hero section** — Static, matches Figma design with Nike Air Max imagery
- **New Drops** — Fetches products from Platzi API (`/products?limit=8`)
- **Categories** — Fetches categories from Platzi API (`/categories`) with carousel
- **Reviews** — Static section using provided review images
- **Footer** — Newsletter signup + links

### 2. Product Detail (`/product/[id]`)
- Fetches product by ID from Platzi API
- Image gallery with thumbnail navigation
- Size selector (EU sizes 39–45)
- Color swatches
- Add to Cart → updates global cart state
- "You may also like" section from API

### 3. Cart (`/cart`)
- Displays cart items from Context API (persisted in localStorage)
- Quantity controls (increase/decrease/remove)
- Order Summary: subtotal, delivery ($6), sales tax (8%), total
- "You may also like" section from API
- Empty cart state

## ✅ Features
- ✅ Pixel-accurate implementation matching Figma screens
- ✅ Fully responsive: mobile + desktop
- ✅ API integration (products + categories from Platzi Fake Store)
- ✅ Loading states (shimmer skeletons)
- ✅ Error states (error banners)
- ✅ Empty states (empty cart view)
- ✅ Cart persisted to localStorage
- ✅ TypeScript throughout
- ✅ Context API for global cart state

## 🔗 API

Base URL: `api-base-url`

Endpoints used:
- `GET /products?limit=N` — Product listings
- `GET /products/:id` — Product details
- `GET /categories` — Category list

## 📸 Images

All images from the Figma design are in `/public/images/`:
- `image-hero.png` — Main hero sneaker image
- `Rectangle_1.png`, `Rectangle_2.png` — Hero thumbnails
- `review-1/2/3.png` — Review avatars
- `review-product-1/2/3.png` — Review product images

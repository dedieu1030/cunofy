# Cunofy

**Data-driven affiliate recommendation platform for tech products and software**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn-Nova-000000)](https://ui.shadcn.com/)

## 🎯 Overview

Cunofy is an affiliate recommendation platform that helps users discover the best tools, software, and tech equipment through **algorithmic scoring** based on measurable indicators—not subjective opinions.

### Core Differentiators

- **📊 Indicator-Based Scoring**: Products ranked 0-100 using 5 quantitative metrics
- **🎯 Data-Driven**: Real-time data from Amazon, Etsy, G2, Capterra, SerpApi
- **🚫 Not a Blog**: Decision engine and recommendation system
- **💰 Affiliate Monetization**: Multi-tier integration (Amazon, Etsy, Partnerize, Impact, CJ)

## ✨ Features

### Current (v0.1)

- ✅ **Homepage** with hero section and product grid
- ✅ **Score Badges** prominently displayed on product cards (87/100, 92/100, etc.)
- ✅ **Category Navigation** with 13 categories
- ✅ **Responsive Design** matching Framer reference
- ✅ **Mock Data** with 6 sample products and scoring

### Scoring System

Each product is evaluated using 5 universal indicators:

| Indicator      | Weight | Description                    |
| -------------- | ------ | ------------------------------ |
| Performance    | 30%    | Real-world performance metrics |
| Adoption       | 25%    | User adoption and popularity   |
| Value/Price    | 20%    | Cost-effectiveness             |
| Reliability    | 15%    | Stability and dependability    |
| Accessibility  | 10%    | Ease of use and availability   |

**Final Score** = Weighted average (0-100)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/dedieu1030/cunofy.git
cd cunofy

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/) (Radix Nova preset)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📁 Project Structure

```
cunofy/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles with design tokens
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Main navigation
│   │   ├── footer.tsx       # Site footer
│   │   └── category-nav.tsx # Category pills
│   ├── products/            # Product components
│   │   └── product-card.tsx # Product card with score
│   └── ui/                  # Shadcn UI components
├── lib/
│   ├── mock-data.ts         # Sample products with scores
│   └── utils.ts             # Utility functions
└── Our-site-like.html/      # HTML reference (design source)
```

## 🎨 Design System

- **Base Color**: Stone
- **Theme**: Light/Dark support
- **Border Radius**: 24px (cards), 100px (buttons/pills)
- **Font Weights**: 400, 500, 600, 700
- **Responsive Breakpoints**:
  - Mobile: < 810px
  - Tablet: 810px - 1439px
  - Desktop: 1440px - 1727px
  - Large: ≥ 1728px

## 🗺️ Roadmap

### Phase 1: Foundation ✅ (Current)

- [x] Next.js setup with Shadcn UI
- [x] Core layout components
- [x] Product cards with score badges
- [x] Mock data structure
- [x] Homepage implementation

### Phase 2: Product Pages (Next)

- [ ] Product detail pages
- [ ] Scoring breakdown visualization
- [ ] Indicator progress bars
- [ ] Related products section

### Phase 3: Data & Filtering

- [ ] Category filtering
- [ ] Search functionality
- [ ] Pagination
- [ ] Sorting options

### Phase 4: Scoring Engine

- [ ] Implement scoring algorithm
- [ ] API integration layer
- [ ] Database integration (Prisma + PostgreSQL)
- [ ] Real-time data updates

### Phase 5: Affiliate System

- [ ] Affiliate link generation
- [ ] Click tracking
- [ ] Analytics dashboard
- [ ] Revenue reporting

## 📊 Sample Products

The platform currently showcases 6 products across 3 categories:

- **Productivity**: Forest (87), Grammarly (92), Craft (89), Notion (94)
- **Business**: Slack (91)
- **Design**: Figma (96)

## 🤝 Contributing

This is a private project in active development. Contributions are not currently accepted.

## 📝 License

All rights reserved © 2024-2025

## 🔗 Links

- **Live Demo**: Coming soon
- **Documentation**: See [walkthrough.md](/.gemini/antigravity/brain/b8f73384-d1fa-4640-9d7c-6bf8dbb393dd/walkthrough.md)
- **GitHub**: [dedieu1030/cunofy](https://github.com/dedieu1030/cunofy)

---

Built with ❤️ using Next.js and Shadcn UI

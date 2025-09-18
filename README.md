# Portfolio Website

A modern, fast portfolio website built with Next.js 15, TypeScript, and MDX. Features a clean design system, dark mode support, and excellent performance scores.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **Content Management**: MDX for projects and blog posts with frontmatter
- **Design System**: Custom UI components built with Radix UI primitives
- **Dark Mode**: System preference detection with manual toggle
- **Performance**: Optimized images, fonts, and static generation
- **SEO**: Open Graph meta tags, sitemap, and robots.txt
- **Responsive**: Mobile-first design that works on all devices

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects list and detail pages
│   ├── writing/           # Blog posts list and detail pages
│   ├── uses/              # Uses/tools page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Button, Card, etc.)
│   └── ...               # Page-specific components
├── content/              # MDX content files
│   ├── projects/         # Project case studies
│   ├── writing/          # Blog posts
│   └── uses/             # Tools and equipment
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design tokens
- **Content**: MDX with gray-matter for frontmatter
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidgibbon1/Example-project.git
   cd Example-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding Projects

Create a new MDX file in `content/projects/`:

```mdx
---
title: "Your Project Title"
slug: "your-project-slug"
description: "Brief project description"
status: "shipped" # draft | wip | shipped
tech: ["Next.js", "TypeScript", "TailwindCSS"]
tags: ["web", "frontend"]
featured: true
links:
  demo: "https://example.com"
  repo: "https://github.com/username/repo"
date: "2025-01-01"
---

Your project content in MDX format...
```

### Adding Blog Posts

Create a new MDX file in `content/writing/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
description: "Brief post description"
tags: ["development", "tutorial"]
date: "2025-01-01"
published: true
---

Your blog post content...
```

## 🎨 Customization

### Design Tokens

Update design tokens in `app/globals.css`:
- Colors (HSL values for light/dark themes)
- Typography (font families and sizes)
- Spacing and layout

### Site Information

Update site metadata in `app/layout.tsx`:
- Site title and description
- Open Graph settings
- Social media links

### Navigation

Modify navigation links in `components/header.tsx`

## 📊 Performance

The website achieves excellent performance scores:
- **Lighthouse Performance**: 100/100
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: Optimized with automatic code splitting
- **Image Optimization**: Automatic WebP conversion and responsive images

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push to main

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome via issues and pull requests.
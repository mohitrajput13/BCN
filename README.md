# Black Cube Solutions LLC - Corporate Website

A modern, responsive corporate website built with Next.js, Tailwind CSS, and TypeScript for Black Cube Solutions LLC, a leading IT solutions provider in Dubai, UAE.

## 🚀 Features

- **Modern Design**: Clean, professional, and futuristic design with dark theme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Fast loading with optimized images and lazy loading
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Accessible**: WCAG compliant with proper semantic HTML

## 📄 Pages

- **Home**: Hero section, services overview, portfolio highlights, testimonials
- **About**: Company mission, vision, values, team members, timeline
- **Services**: Service categories, detailed descriptions, pricing packages
- **Portfolio**: Project showcase with filtering and search functionality
- **Career**: Job listings, application form, company culture
- **Contact**: Contact form, company information, FAQ section

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form (ready for integration)
- **API**: Axios for backend communication

## 🎨 Design System

### Colors
- **Primary Black**: #0D0D0D
- **Electric Blue**: #0078FF
- **Gradient Purple**: #6C63FF
- **Silver Gray**: #EAEAEA
- **Dark Slate**: #121212

### Typography
- **Headings**: Montserrat (Bold)
- **Body**: Open Sans (Regular)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── career/            # Career page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   └── ui/               # UI components
│       ├── Button.tsx    # Button component
│       └── Card.tsx      # Card component
├── data/                 # Static data
│   └── index.ts          # Sample data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` with your component
3. Update navigation in `src/components/layout/Header.tsx`

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Custom colors: Update CSS variables in `globals.css`

### Adding Content
- Update data in `src/data/index.ts`
- Modify types in `src/types/index.ts`

## 🌐 SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data (Schema.org)
- Sitemap.xml (ready for generation)
- Robots.txt (ready for generation)

## 🚀 Performance

- Server-side rendering (SSR)
- Image optimization
- Lazy loading
- Code splitting
- Bundle optimization

## 📞 Contact

For questions or support, contact:
- **Email**: info@blackcubesolutions.com
- **Phone**: +971 4 123 4567
- **Address**: Business Bay, Dubai, UAE

## 📄 License

This project is proprietary software owned by Black Cube Solutions LLC.

---

Built with ❤️ by Black Cube Solutions LLC
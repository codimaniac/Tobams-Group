# Tobams Group

Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.

## Live Demo

Visit the live website at: [https://tobams-group-phi.vercel.app/](https://tobams-group-phi.vercel.app/)

## Features

- **Learning Management System (LMS)**: TG Academy hub for knowledge and skill-building resources
- **Training Programs**: Corporate trainings, personalized individual training, and capacity development
- **Consultant Training**: Programs for becoming certified training consultants
- **Transformation Hub**: Webinar series with CEO Jite Newton
- **Testimonials**: Client feedback and success stories
- **Responsive Design**: Optimized for all devices

## Design Resources

- **Figma Design**: [View the design file](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-874&t=vnjgVCNIg2DwWcUH-0)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Nunito and Nunito Sans
- **Deployment**: Vercel

## Setup Instructions

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tobams-group.git
   cd tobams-group
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LMS.tsx
│   ├── NavBar.tsx
│   └── ...
├── assets/              # Static assets
│   ├── icons/
│   └── images/
├── public/              # Public assets
└── ...
```

## Design Decisions and Technical Assumptions

### Design Decisions

- **Component-Based Architecture**: Modular components for maintainability and reusability
- **Responsive Design**: Mobile-first approach using Tailwind CSS breakpoints
- **Accessibility**: Added meaningful alt text for all images to improve screen reader support
- **Color Scheme**: Purple-based theme consistent with brand identity
- **Typography**: Nunito font family for modern, readable text

### Technical Assumptions

- **Scrollbar Hiding**: Used vanilla CSS for hiding scrollbars since Tailwind CSS doesn't provide built-in utilities for this
- **Next.js Image Optimization**: Assumed all images are properly optimized and stored in `/assets` or `/public`
- **TypeScript**: Strict typing for better code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vercel Deployment**: Optimized for Vercel's platform features like Image Optimization
- **Browser Support**: Modern browsers with ES6+ support
- **Performance**: Lazy loading and optimization handled by Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Tobams Group.

---

*Note: This README.md was cleaned up and improved using an AI tool for better clarity and structure.*

# Bryant Studio Portfolio

A modern SaaS-focused personal portfolio and freelance landing page built with Next.js, TypeScript, and Tailwind CSS. This project is designed for founders, SaaS teams, and independent developers who want a polished product website they can use for client work or personal branding.

It includes:
- Homepage with conversion-focused SaaS style layout
- Services page
- Case study page
- Process page
- About page
- Contact page
- Reusable content structure for easy customization
- Responsive design for desktop and mobile

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

## Project Structure

```bash
saas-launchpad/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── case-study/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── process/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── landing/
│   │   ├── cta.tsx
│   │   ├── faq.tsx
│   │   ├── features.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── logo-cloud.tsx
│   │   ├── metrics.tsx
│   │   ├── pricing.tsx
│   │   ├── testimonials.tsx
│   │   └── workflow.tsx
│   └── layout/
│       └── header.tsx
├── data/
│   └── site.ts
├── .gitignore
├── .eslintrc.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
```

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js 18 or later
- npm or yarn
- Git

You can check your versions with:

```bash
node -v
npm -v
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/bryantqazwsx0828/saas-launchpad.git
cd saas-launchpad
```

2. Install dependencies

```bash
npm install
```

If you prefer yarn:

```bash
yarn install
```

## Local Development

To start the app locally:

```bash
npm run dev
```

Then open your browser and visit:

```text
http://localhost:3000
```

If the development server starts successfully, you should see the portfolio website rendered.

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Linting

```bash
npm run lint
```

## Customization

You can edit the main portfolio content in:

- `data/site.ts` — company name, hero text, services, case studies, pricing, FAQ, etc.
- `app/*/page.tsx` — page-specific content and layout structure
- `components/*` — reusable UI blocks and components

### Example: change the brand name
Open `data/site.ts` and update:

```ts
export const siteConfig = {
  name: 'Bryant Studio',
  headline: 'I design and build SaaS websites that help startups get traction faster.',
  ...
};
```

## Deployment

### Option 1: Deploy to Vercel (recommended)

1. Push your project to GitHub
2. Go to https://vercel.com
3. Import the repository
4. Select the project repository
5. Use the default settings
6. Click Deploy

Vercel will automatically build and deploy the project using the Next.js framework.

### Option 2: Deploy to other hosting providers

This is a standard Next.js app, so it can also be deployed to:
- Netlify
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

This project does not require environment variables for the basic demo version. If you later add contact form handling, analytics, or CMS integration, you can add them in a `.env.local` file.

Example:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Notes

- The site is intentionally modular so it can be reused for different SaaS client projects.
- Content is centralized for faster iteration and customization.
- The design is geared toward startups and modern product brands.

## License

This project is for portfolio and client-demo use. You may adapt it freely for your own work.

## Support

If you run into issues, check:
- Node version compatibility
- Whether dependencies are installed correctly
- Whether you are in the correct project folder

For local debugging:

```bash
npm run dev
```

Then check the terminal output for any build or runtime errors.

## Summary

This project is ready for local development and can be deployed to Vercel in a few steps. It is structured for easy branding updates and can be tailored for your portfolio, startup pitch, or freelance SaaS service website.

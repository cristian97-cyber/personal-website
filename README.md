# Cristian Esposito - Personal Website

My personal website and portfolio, available at:

https://cristianesposito.dev/

The project presents a professional profile, technical skills, work experience, education, and contact channels in an Angular single-page application with client-side routing, light/dark theme support, and content managed through local JSON files.

## Content

- **Home**: personal introduction, dynamic tagline, main links, calls to action, and a technology carousel.
- **Skills**: skills organized by area, including Front-End, Back-End, languages, tools, and DevOps.
- **Experience**: responsive work experience timeline with role, company, period, employment type, location, skills, and technologies.
- **Education**: education history with selectable detail panels.
- **Contact**: contact information, location, professional availability, and external links.

## Architecture

The application is built with Angular 22 using standalone components and route-level lazy loading.

```text
src/app/
  app.ts                      Application root shell
  app.html                    Main layout with navbar, router outlet, and footer
  app.config.ts               Global providers and router configuration
  app.routes.ts               Client-side routes and lazy-loaded pages
  components/                 Reusable components
  data/                       Structured JSON content
  enum/                       Shared enumerations
  model/                      TypeScript models for application data
  pages/                      Main website pages
  services/                   Shared state and services
```

The main routes are:

- `/home`
- `/skills`
- `/experience`
- `/education`
- `/contact`

The empty route redirects to `/home`. The router uses `withInMemoryScrolling` with scroll position restoration enabled.

## Technical Components

### Framework and Runtime

- Angular `22`
- TypeScript `~6.0`
- RxJS `~7.8`
- Node.js `>=24.15.0`
- npm `11.16.0`

### UI and Styling

- Tailwind CSS v4 configured through `@tailwindcss/postcss`.
- Global design tokens in `src/styles.css` through HSL variables and `@theme inline`.
- Light/dark theme controlled by the `dark` class on the `html` element.
- Icons provided by `@lucide/angular`.
- Reusable UI components:
  - `AppButton` for consistent buttons and links.
  - `AppChip` for labels and tags.
  - `AppCard` for content cards.
  - `MainNavbar` for desktop/mobile navigation and theme switching.
  - `AppLogo` for the brand monogram.
  - `ExperienceCard`, `EducationCard`, `EducationDetails`, `TechnologyCarousel`, `TechnologyIcon`, `TechnologyIconText`, `LinkIcon`, and `Footer` for portfolio-specific sections.

### State and Services

- `ThemeService` stores theme state with Angular signals, exposes a read-only signal, and provides explicit methods to set or toggle the theme.
- `LayoutService` stores shared layout information, such as the navbar height, used by pages to calculate the available minimum height.

### Data

Content is separated from the UI and lives in `src/app/data/`:

- `technologies.json`
- `work-experiences.json`
- `education-experiences.json`
- `links.json`

The corresponding models live in `src/app/model/`. Dates are stored as ISO strings in JSON and converted to `Date` objects in the pages that consume them.

### Public Assets

Static assets live in `public/`, including:

- SVG and ICO favicons
- downloadable CV at `public/documents/cristian-esposito-cv.pdf`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:4200/
```

## Build

Create a production build:

```bash
npm run build
```

Build artifacts are generated in `dist/personal-website`.

For a continuous development build:

```bash
npm run watch
```

## Type Checking and Tests

Type-check the application:

```bash
npx tsc -p tsconfig.app.json --noEmit
```

Type-check the tests:

```bash
npx tsc -p tsconfig.spec.json --noEmit
```

Run unit tests:

```bash
npm test
```

Tests are not central to this project and should only be run when requested.

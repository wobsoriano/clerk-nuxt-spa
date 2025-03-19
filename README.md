# Clerk Nuxt SPA

An example of using `@clerk/nuxt` SDK when ssr is disabled.

Configuration:

- Added a plugin that waits for Clerk to be loaded first, blocking the rendering of pages and running middleware until Clerk is loaded in the browser
- Set `skipServerMiddleware` option to `false` since we don't need it at all for SPA

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

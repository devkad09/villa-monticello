# Villa Monticello Boutique Hotel — Website Platform

A world-class digital hospitality experience designed and engineered for **Villa Monticello Boutique Hotel**, an exclusive sixteen-suite luxury sanctuary in Accra's prestigious Airport Residential Area, Ghana.

Built with **Next.js 16 (App Router & Turbopack)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Table of Contents

1. [Architecture & Technology Stack](#architecture--technology-stack)
2. [Prerequisites & Installation](#prerequisites--installation)
3. [Running Locally](#running-locally)
4. [Environment Variables](#environment-variables)
5. [Centralized Hotel Data Architecture](#centralized-hotel-data-architecture)
6. [Suite Data Architecture (Single Source of Truth)](#suite-data-architecture-single-source-of-truth)
7. [Booking Engine Integration](#booking-engine-integration)
8. [Contact Form & API Provider Setup](#contact-form--api-provider-setup)
9. [Concierge WhatsApp & Telephony](#concierge-whatsapp--telephony)
10. [Maps & Location Navigation](#maps--location-navigation)
11. [SEO, Social Previews & Schema.org](#seo-social-previews--schemaorg)
12. [Security Headers & Redirects](#security-headers--redirects)
13. [Production Deployment Guide](#production-deployment-guide)
14. [Pre-Launch Deployment Checklist](#pre-launch-deployment-checklist)

---

## Architecture & Technology Stack

- **Framework**: Next.js 16 (React Server Components, App Router, Turbopack)
- **Language**: TypeScript (Strict typing across data schemas and component interfaces)
- **Styling**: Tailwind CSS v4 with custom design tokens (Warm Ivory `#FAF8F5`, Deep Ebony `#121110`, Sand `#DCD5C9`, Gold `#B89355`)
- **Typography**: Cormorant Garamond (Editorial Serif headlines) and Plus Jakarta Sans (Clean modern body copy)
- **Animation**: Framer Motion for subtle, staggered entrance choreography
- **Icons**: Lucide React
- **API Architecture**: Next.js Route Handlers (`/api/contact`) with server-side validation

---

## Prerequisites & Installation

### Requirements
- **Node.js**: `v20.x` or later (LTS recommended)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Setup Instructions

1. **Clone or navigate to the repository directory**:
   ```bash
   cd /path/to/villa-monticello
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```

---

## Running Locally

### Development Server
Start the local Next.js dev server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Local Validation
Compile an optimized production build and run it locally:
```bash
# 1. Build optimized static and server pages
npm run build

# 2. Start production server locally
npm run start
```

---

## Environment Variables

Environment variables are organized between public client variables (prefixed with `NEXT_PUBLIC_`) and private server-only variables. See `.env.example` for the complete template.

| Variable | Scope | Purpose | Default / Example |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Public (Client/SSR) | Production canonical domain URL | `https://villamonticello.com` |
| `NEXT_PUBLIC_BOOKING_URL` | Public (Client) | Official Swiftbook booking portal URL | `https://www.swiftbook.io/inst/#home?...` |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Public (Client) | Direct link to Google Maps place location | `https://www.google.com/maps/place/...` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public (Client) | Direct international WhatsApp phone number | `233557216752` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public (Client) | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `CONTACT_EMAIL` | Private (Server) | Destination address for website inquiries | `reservations@villamonticello.com` |
| `EMAIL_API_KEY` | Private (Server) | Provider API key for transactional email | (e.g. Resend or SendGrid API key) |
| `SMTP_HOST` | Private (Server) | Optional SMTP server hostname | (e.g. `smtp.mailgun.org`) |

---

## Centralized Hotel Data Architecture

All factual property information is managed from a single source of truth:

- **File**: `src/data/hotel.ts`
- **Export**: `hotelConfig` (and backward-compatible alias `hotelInfo`)

```typescript
import { hotelConfig } from '@/data/hotel';

// Access verified properties:
hotelConfig.name                 // "Villa Monticello"
hotelConfig.address.displayAddress // "No 1 Mankata Avenue Link, Airport Residential Area, Accra, Ghana"
hotelConfig.contact.phone        // "+233 55 721 6752"
hotelConfig.contact.reservationsPhone // "+233 24 243 6000"
hotelConfig.checkInTime          // "14:00"
hotelConfig.checkOutTime         // "12:00"
hotelConfig.whatsapp.url         // Generated wa.me deep link with pre-filled message
hotelConfig.restaurant.hours     // Verified Brasserie meal periods
```

---

## Suite Data Architecture (Single Source of Truth)

Villa Monticello features **16 individually designed suites**. All suite metadata is managed through a single canonical data store:

- **Types**: `src/types/suite.ts` (`Suite`, `SuiteCategory`)
- **Data**: `src/data/suites.ts` (`suites`, `getAllSuites()`, `getSuiteBySlug()`, `getFeaturedSuite()`, `getRelatedSuites()`)

### Suite Model Schema
```typescript
export interface Suite {
  id: string;               // Unique string identifier ('nelson-mandela')
  slug: string;             // URL-friendly route parameter ('nelson-mandela')
  number: number;           // Sequential room index (1 to 16)
  name: string;             // Display title ('Nelson Mandela')
  category: SuiteCategory;  // 'Presidential Suite' | 'Executive Plus' | 'Executive Suite' | 'Junior Suite'
  tagline: string;          // Editorial summary
  size?: string;            // Floor proportion ('72 m²')
  bed?: string;             // Bed configuration ('King Bed')
  view?: string;            // Primary vista ('Private Garden & Terrace')
  description: string;      // Architectural narrative
  editorialStory: string[]; // Multi-paragraph detailed background
  images: string[];         // High-resolution photography array
  featuredImage?: string;   // Primary card visual (defaults to images[0])
  amenities: string[];      // Bulleted luxury features
  highlights: string[];     // Key architectural tags
  featured?: boolean;       // Spotlight flag
  ctaLabel?: string;        // Booking button label ('Reserve Suite')
  bookingRef?: string;      // PMS room type reference
}
```

---

## Booking Engine Integration

The booking workflow is engineered around discovery, trust, and conversion without faking real-time availability:

1. **Global Booking Triggers**:
   - `BOOK YOUR STAY` appears in the navigation header, mobile menu, hero section, suite detail pages, and final conversion section.
   - Clicking opens the accessible slide-over [`QuickBookingDrawer.tsx`](file:///Users/kelvin/Desktop/villa-monticello/src/components/booking/QuickBookingDrawer.tsx).
2. **Context Preservation**:
   - Users select check-in, check-out, guest count, and suite tier.
   - Clicking `CHECK AVAILABILITY →` formats the parameters and seamlessly hands off to the official Villa Monticello **Swiftbook** reservation engine (`hotelConfig.urls.bookingUrl`).
3. **Dedicated Gateway Route** (`/book`):
   - Accepts URL query parameters (e.g. `/book?suite=kwame-nkrumah`).
   - Displays chosen suite specifications, direct booking privileges, and a direct link to complete reservation.
4. **Fallback Resilience**:
   - If the external booking URL is unavailable, all booking interfaces offer direct telephone (`+233 55 721 6752`) and WhatsApp links.

---

## Contact Form & API Provider Setup

- **Client Component**: `src/components/forms/InquiryForm.tsx`
- **Server Route Handler**: `src/app/api/contact/route.ts`

### Validation & Behavior
- **Client-Side**: Validates name (>= 2 chars), email (valid format), phone (>= 6 chars), and message (>= 5 chars) before sending.
- **Server-Side**: Re-validates all fields. Malformed requests return `400 Bad Request`. Non-POST requests return `405 Method Not Allowed`.
- **Email Dispatching**:
  - If `EMAIL_API_KEY` or `SMTP_HOST` is configured in `.env.local`, the server will dispatch the message to `CONTACT_EMAIL`.
  - In development or staging without credentials, the API returns `status: "provider_pending"`, acknowledging receipt without pretending an email was dispatched.

---

## Concierge WhatsApp & Telephony

### WhatsApp Integration
- **Component**: `src/components/cta/WhatsAppButton.tsx`
- **Number**: Configurable via `NEXT_PUBLIC_WHATSAPP_NUMBER` (Default: `233557216752` representing `+233 55 721 6752`).
- **Pre-filled Message**: Properly URL-encoded:
  `"Hello Villa Monticello, I would like to enquire about a stay."`

### Phone CTAs
- All phone links across header, footer, booking drawer, and contact pages use standard `tel:` links bound to `hotelConfig.contact.phone`.

---

## Maps & Location Navigation

- **Component**: `src/components/location/InteractiveMapSection.tsx`
- **Visual Location Panel**: Displays authentic Villa Monticello photography, animated location beacon, verified street address, and GPS coordinates (`5.6037° N, -0.1870° W`).
- **Direct Navigation Buttons**:
  - `GET DIRECTIONS →`: Opens Google Maps directions routing directly to Villa Monticello.
  - `OPEN IN MAPS →`: Opens the Google Maps place listing.
  - Interactive map toggle: Allows visitors to view the embedded Google Map directly without leaving the page.

---

## SEO, Social Previews & Schema.org

### Metadata & Social Cards
- **Open Graph**: Title, description, and high-resolution courtyard pool image configured on root layout and inherited across routes.
- **Twitter Cards**: Configured with `summary_large_image`.
- **Dynamic Sitemap**: Automatically generated at `/sitemap.xml` indexing all 32 public canonical routes.
- **Robots Directives**: Configured at `/robots.txt` allowing all public pages while protecting `/api/`.

### Schema.org JSON-LD Structured Data
- **Root Layout** (`/`): Verified `Hotel` & `Organization` schemas with physical address, geo coordinates, and verified amenities.
- **Dining** (`/dine`): Valid `Restaurant` schema for *The Brasserie* (servesCuisine, address, openingHoursSpecification, telephone, priceRange).
- **Suites** (`/suites/[slug]`): Dynamic `HotelRoom` schema for each suite (bed, occupancy, floor size, amenities, hotel container).
- **Integrity Guarantee**: Zero invented reviews, fake star ratings, or unverified claims.

---

## Security Headers & Redirects

Configured in `next.config.ts`:

### Security Headers
- `X-Frame-Options: SAMEORIGIN` (Clickjacking mitigation)
- `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
- `Referrer-Policy: origin-when-cross-origin` (Privacy preservation)
- `Permissions-Policy: camera=(), microphone=(), geolocation=(self)` (Hardware permission restriction)
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (HSTS)

### Legacy & Alias 308 Redirects
- `/rooms` → `/suites`
- `/rooms/:slug*` → `/suites/:slug*`
- `/dining` → `/dine`
- `/restaurant` → `/dine`

---

## Analytics Configuration

The application includes an event tracking abstraction in `src/lib/analytics.ts`:
- **Supported Providers**: Google Analytics 4 (`gtag.js`), Plausible Analytics, and custom analytics telemetry.
- **Conditional Loading**: In `src/app/layout.tsx`, Google Analytics script only loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present in the environment (e.g. `G-XXXXXXXXXX`). If omitted, no tracking scripts are injected, ensuring zero fake IDs or unnecessary network overhead.
- **Instrumented Conversion Events**:
  - `start_booking` / `click_book_now` / `click_book_your_stay` / `click_check_availability`
  - `view_suite` (captures suite name, slug, occupancy)
  - `view_offer` / `click_offer`
  - `submit_contact` / `submit_event_inquiry`
  - `click_phone` (`tel:` links)
  - `click_whatsapp` (direct concierge conversation triggers)
  - `click_restaurant_reservation`

---

## Domain Configuration & SSL/DNS

Villa Monticello's production domain is `villamonticello.com`:

1. **DNS Settings**:
   - `A` Record: `@` pointing to hosting provider IP (e.g., `76.76.21.21` for Vercel).
   - `CNAME` Record: `www` pointing to `cname.vercel-dns.com` (or provider alias).
2. **Canonical Domain**:
   - Primary domain: `https://villamonticello.com`
   - Secondary domain `https://www.villamonticello.com` redirects automatically (308/301) to canonical `https://villamonticello.com`.
3. **SSL / HTTPS**:
   - SSL certificates are provisioned automatically via Let's Encrypt / hosting edge.
   - HSTS header `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` is enforced on all responses via `next.config.ts`.
4. **Environment Setting**:
   - Set `NEXT_PUBLIC_SITE_URL=https://villamonticello.com` in production environment variables.

---

## Maintenance Instructions

### 1. Updating Suite Details & Rates
All suite content, specs, bed types, and gallery photos are centralized in [`src/data/suites.ts`](file:///Users/kelvin/Desktop/villa-monticello/src/data/suites.ts). Modifying this single file automatically updates:
- The `/suites` catalog and category filters.
- All `/suites/[slug]` dynamic detail pages.
- The booking gateway selector (`/book`).
- The XML sitemap (`/sitemap.xml`).

### 2. Updating Seasonal Offers & Packages
Active and archived packages are managed in [`src/data/offers.ts`](file:///Users/kelvin/Desktop/villa-monticello/src/data/offers.ts).
- Toggle `status: 'active' | 'archived'` or set `validUntil` expiration dates.
- Expired or deactivated packages automatically move to past privileges, preventing active promotion of outdated rates.

### 3. Dining & Brasserie Menus
Menu highlights, hours of service, dress code, and reservation details are maintained in [`src/data/dining.ts`](file:///Users/kelvin/Desktop/villa-monticello/src/data/dining.ts) and [`src/data/hotel.ts`](file:///Users/kelvin/Desktop/villa-monticello/src/data/hotel.ts).

### 4. Updating Hotel Contact Information
Address, phone numbers, WhatsApp lines, email desks, and Google Maps links are centralized in [`src/data/hotel.ts`](file:///Users/kelvin/Desktop/villa-monticello/src/data/hotel.ts). Any updates there propagate instantly to headers, footers, drawers, schema markup, and contact pages.

### 5. Dependency & Security Updates
To audit and update project dependencies periodically:
```bash
npm audit
npm run lint
npm run build
```

---

## Production Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub (`devkad09/villa-monticello`).
2. In the Vercel dashboard, click **Add New Project** and select the repository.
3. Configure the environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL`: `https://villamonticello.com`
   - `NEXT_PUBLIC_BOOKING_URL`: `https://www.swiftbook.io/inst/#home?propertyId=981NSDALXuB4F3qmFWcpG0negCD6Dhrf0J3hmREz5isgargubu9SRTQ3MTQ=&JDRN=Y`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `233557216752`
   - `NEXT_PUBLIC_GOOGLE_MAPS_URL`: `https://www.google.com/maps/place/Villa+Monticello+Boutique+Hotel/@5.6037,-0.187,17z`
   - `CONTACT_EMAIL`: `reservations@villamonticello.com`
   - `EMAIL_API_KEY`: (Resend, SendGrid, or SMTP credentials)
4. Click **Deploy**. Vercel will run `npm run build` and provision edge caching.

### Deploying via Node.js Server / VM
1. Build the production application:
   ```bash
   npm run build
   ```
2. Start the production server on port 3000 (or custom port via `PORT` variable):
   ```bash
   NODE_ENV=production npm run start
   ```

---

## Pre-Launch Deployment Checklist

- [x] **Real hotel information verified** (Address, phone, email, meal hours, coordinates).
- [x] **Suite data centralized** (16 suites driven from `src/data/suites.ts` as single source of truth).
- [x] **Booking URL configured** (Official Swiftbook portal wired into `hotelConfig` and environment variables).
- [x] **Contact email configured** (Backend `/api/contact` route handler ready with validation).
- [x] **WhatsApp configured** (Real number `+233 55 721 6752` with encoded inquiry message).
- [x] **Phone configured** (Standard `tel:` links verified across all components).
- [x] **Maps configured** (Verified coordinates `5.6037, -0.1870` with resilient fallback).
- [x] **Social links verified** (Authentic Instagram, Facebook, and LinkedIn profiles).
- [x] **Environment variables documented** (Clean `.env.example` created without secrets).
- [x] **Production domain configured** (`NEXT_PUBLIC_SITE_URL` configurable on root metadata).
- [x] **Favicon configured** (Authentic Villa Monticello emblem icons).
- [x] **OG image configured** (Courtyard pool high-resolution social share banner).
- [x] **Sitemap working** (Dynamically rendered at `/sitemap.xml` with 32 URLs).
- [x] **Robots working** (Directives verified at `/robots.txt`).
- [x] **Production build successful** (`npm run build` compiles with 0 errors).
- [x] **No console errors** (Codebase free of unhandled exceptions and stray console.log).
- [x] **No broken images** (All images use Next.js `<Image>` with verified URLs).
- [x] **No localhost references** (Zero hardcoded localhost strings in application code).
- [x] **No fake content** (Verified 2011 founding history and authentic hospitality copy).
- [x] **No fake integrations** (Pending email credentials transparently acknowledged in staging).

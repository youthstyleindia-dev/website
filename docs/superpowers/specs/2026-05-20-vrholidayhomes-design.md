# VR Holiday Homes - Design Specification

## Project Overview
VR Holiday Homes is a Goa-based hotel and luxury villa rental brand with a 24-year legacy of trusted hospitality. This website is a premium, cinematic, ultra-modern Single-Page Application (SPA) designed to build an emotional connection with guests, showcase properties in North Goa (particularly Candolim), and drive direct bookings via inquiries and WhatsApp.

---

## 1. Visual Identity & Brand System

### 1.1 Typography
- **Primary Typeface (Headings)**: `Playfair Display` (imported from Google Fonts). Used for elegant, classic serif headlines to convey trust, legacy, and luxury.
- **Secondary Typeface (Body)**: `Open Sans` (imported from Google Fonts). Used for clean, modern, and highly legible body text and UI controls.

### 1.2 Color Palette
All color values are defined as Tailwind theme variables or custom Tailwind utility classes:
- **Pure White (`#FFFFFF`)**: Base background, clean borders, crisp typography.
- **Twilight Blue (`#1C3C80` / HSL `221, 64%, 31%`)**: Primary brand color, representing the oceans and sky of Goa. Used for trust badges, primary CTAs, and active navigation states.
- **Obsidian Black (`#2B1B17` / HSL `12, 30%, 13%`)**: Warm dark brown/black. Used for dark cinematic sections (Hero, Testimonials, Footer), text colors, and overlays.
- **Doe Brown (`#C19A6B` / HSL `33, 41%, 59%`)**: Sand/gold tone, representing Goan beaches. Used for accents, borders, sub-elements, and decorative typography.
- **Warm Sand Background (`#F9F6F0`)**: Base background for daytime content sections (Trust & Legacy, Showcase, FAQs).

### 1.3 Design Elements & Style Guidelines
- **Tropical Minimalism**: High whitespace, clean alignments, and thin borders (`border-doe-brown/20`).
- **Glassmorphism**: Soft background blurs (`backdrop-blur-md bg-white/70` or `bg-obsidian-black/70`) for cards, chatbot, navigation, and floating CTAs.
- **Images & Visual Media**: High-quality imagery generated/curated for tropical resort style, featuring local experiences (beach sunsets, private pools, cafe mornings).

---

## 2. Technical Architecture & Components

### 2.1 Framework & Core Packages
- **Framework**: React 19 (Vite-based build pipeline).
- **Styling**: Tailwind CSS V4.
- **Icons**: `lucide-react` for clean, consistent premium iconography.
- **State Management**: React Context / Hooks for booking dates, filter selections, and active modals.

### 2.2 Component Hierarchy
- **`App`**: Layout wrapper, navigation, global state provider, main content, and virtual assistant.
- **`Navbar`**: Glassmorphic, sticky navigation bar. Switches style on scroll (transparent to warm sand/obsidian black).
- **`HeroSection`**: Full-screen cinematic landing with autoplaying video background, elegant dark gradient, titles, scroll indicator, and CTA buttons.
- **`TrustSection`**: Storytelling layout with statistics counter (Happy Guests, Properties, Years of Legacy).
- **`PropertyShowcase`**: 
  - Filter bar (Villas, Beachside, Family Stay, Luxury Suites, Workation).
  - Grid of Property Cards.
- **`PropertyDetailModal`**: Slide-over panel containing a detailed gallery, description, amenity list, pricing, and direct booking inquiry form.
- **`ExperienceSection`**: Split-screen narrative section showcasing Goan lifestyle experiences with image transitions.
- **`WhyChooseUs`**: Grid of value propositions (legacy, locations, support, etc.).
- **`Testimonials`**: Carousel with guest reviews, profile images, and star ratings.
- **`InstagramSection`**: Grid of mock Instagram reels/posts with hover zoom effects.
- **`BookingCTA`**: Immersive conversion-focused form for check-in/check-out dates, guests, property selection, and direct submission.
- **`FAQSection`**: Accordion component with smooth expanding details.
- **`ChatbotAssistant`**: Floating widget that expands into a conversational virtual concierge.
- **`Footer`**: Premium black-gold footer containing contact info, address, map embed, and links.

---

## 3. Data Schema & Content Model

### 3.1 Properties Data
Each property object contains:
```typescript
interface Property {
  id: string;
  name: string;
  type: 'villa' | 'beachside' | 'family' | 'suite' | 'workation';
  location: string;
  pricePerNight: number;
  image: string;
  gallery: string[];
  bedrooms: number;
  guests: number;
  amenities: string[];
  description: string;
  tagline: string;
}
```

### 3.2 Experience Data
Each experience contains:
```typescript
interface Experience {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
}
```

---

## 4. Key Functional Features

### 4.1 Property Filtering & Detail Slide-Over
- State-driven filtering: Selecting a filter dynamically updates the visible grid with smooth animations.
- Detail Modal: Opens a sliding drawer from the right, preventing page scroll. It loads property-specific galleries, descriptions, and contains a pre-filled booking inquiry form.

### 4.2 Booking Inquiry & WhatsApp Routing
- Users can fill in dates, property, guests, name, and contact details.
- Submitting the form opens a WhatsApp API window pre-populated with:
  `"Hello VR Holiday Homes, I would like to book [Property Name] from [Check-in] to [Check-out] for [Guests] guests."`
- Graceful fallback: Web-based success notification with contact fallback.

### 4.3 AI Conversational Assistant ("VR Concierge")
- Custom chatbot UI located at the bottom-right.
- Programmed with predefined responses for booking assistance, pet policies, directions, and Candolim recommendations.
- Interactive choice bubbles (e.g., "See Villas", "Check-in Rules", "Talk to Host").

---

## 5. SEO & Accessibility Strategy
- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<footer>`, `<h1>` to `<h5>` hierarchy.
- **SEO Meta**: Target tags for "Luxury villas in Goa", "Best stay in Goa", and "Private villa Goa" embedded in the template header.
- **Image Optimization**: Custom lazy loading on images below the fold, explicit sizes, and descriptive alternative text (`alt`).
- **Interactive States**: Proper focus outlines, keyboard close support (Escape key) on modals, and distinct descriptive `id` tags.

---

## 6. Testing & Verification Plan
- **Automated Tests**: Verification script checking React component mounts, filtering updates, and modal triggers using Playwright/browser tools.
- **Visual Audit**: Visual layout check across mobile viewport sizes (responsive columns, collapsing navbar, full-width slide-overs).

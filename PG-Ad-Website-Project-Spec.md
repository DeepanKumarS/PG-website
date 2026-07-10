# PG Advertisement Website — Project Spec

## 1. Project Overview
A **static, ad-only website** (no backend, no booking/payment system) to advertise PG (Paying Guest) accommodations in **2 locations**. Purpose is purely informational/lead-generation — customers browse listings and contact the owner via WhatsApp/phone. Style inspiration: Airbnb-like browsing experience (cards, filters, image galleries, map pins).

## 2. Tech Stack (fully free, no billing setup required)
- **Framework:** React + Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS (or plain CSS — Tailwind recommended for speed)
- **Maps:** Leaflet + OpenStreetMap (free, no API key)
- **Contact:** WhatsApp deep link (`https://wa.me/<number>`) + phone call link (`tel:<number>`) — no form/backend needed
- **Hosting:** Vercel (free tier)
- **Data:** Static local JSON/JS file — no database, no CMS

## 3. Site Structure / Pages
1. **Home**
   - Hero section (banner image, tagline, CTA "Browse Rooms")
   - Stats strip: total Cities / Areas / Rooms (computed from data file, not hardcoded numbers)
   - City selector cards (2 cities, clickable → goes to listings filtered by that city)

2. **Listings Page** (`/listings` or `/listings/:city`)
   - Filter bar: City → Area → Room type/sharing (dropdowns)
   - Grid of listing cards: thumbnail image, area name, sharing type, rent, short tag (e.g. "AC / Non-AC")
   - Click card → Listing Detail page

3. **Listing Detail Page** (`/listing/:id`)
   - Image gallery/carousel
   - Room details: sharing type, rent, amenities list, availability note
   - Embedded Leaflet map with a single pin at that property's lat/lng
   - Sticky "Enquire" section: WhatsApp button + Call button

4. **All Locations Map (optional, nice-to-have)** (`/map`)
   - Single Leaflet map with all property pins across both cities
   - Clicking a pin shows a popup with mini info + "View Details" link

## 4. Data Model
Keep everything in one static file: `src/data/listings.js`

```js
export const cities = [
  {
    id: "city1",
    name: "City Name 1",
    areas: [
      {
        id: "area1",
        name: "Area Name 1",
        rooms: [
          {
            id: "room1",
            title: "Single Sharing AC Room",
            sharingType: "Single",
            rent: 8000,
            amenities: ["AC", "WiFi", "Attached Bathroom", "Food Included"],
            images: ["/images/room1-1.jpg", "/images/room1-2.jpg"],
            lat: 13.0827,
            lng: 80.2707,
            available: true
          }
          // more rooms...
        ]
      }
      // more areas...
    ]
  }
  // second city...
];
```

- **Cities count** = `cities.length`
- **Areas count** = sum of `areas` across all cities
- **Rooms count** = sum of all `rooms` across all areas
- All computed dynamically from this file, so updating counts = just editing the data file.

## 5. Component Breakdown
- `Header` — logo, nav (Home / Listings / Map), contact info
- `Footer` — basic contact info, WhatsApp/phone links
- `HeroBanner`
- `StatsStrip` — cities/areas/rooms count
- `CityCard`
- `FilterBar` — city/area/sharing type dropdowns
- `ListingCard`
- `ImageGallery` — simple carousel/lightbox for room images
- `MapView` — reusable Leaflet map component (single pin or multi-pin mode)
- `EnquireButtons` — WhatsApp + Call buttons (reusable, takes phone number as prop)

## 6. Contact Integration
- WhatsApp: `<a href="https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in [Room Name]">`
- Phone: `<a href="tel:+91XXXXXXXXXX">`
- No form, no email backend needed — keeps it 100% static and free.

## 7. Assets Needed From User
- Logo (optional)
- Property images (organize per room/area folder for clarity)
- Lat/Lng coordinates for each property (can get from Google Maps → right-click → coordinates)
- WhatsApp number + phone number
- Actual rent/amenities/sharing details per room

## 8. Deployment
- Push code to GitHub
- Connect repo to Vercel → auto-deploy on push
- Free `.vercel.app` subdomain; custom domain optional (separate purchase)

## 9. Build Order (suggested)
1. Scaffold Vite + React + Tailwind + React Router
2. Build data file with placeholder/sample data
3. Build Header/Footer/layout shell
4. Build Home page (hero + stats + city cards)
5. Build Listings page with filters
6. Build Listing Detail page with gallery + map + enquire buttons
7. Build optional all-locations Map page
8. Replace placeholder data/images with real content
9. Deploy to Vercel

## 10. Explicitly Out of Scope (for this version)
- User accounts / login
- Booking or payment system
- Admin panel / CMS (content updates = editing the data file directly)
- Reviews/ratings
- Backend/database

---
*Prepared as a handoff spec for implementation via Claude Code in VS Code.*

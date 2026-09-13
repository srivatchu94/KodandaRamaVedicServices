# Sri Kodanda Rama Vedic Services

Static one-page React site for Sri Kodanda Rama Vedic Services — Vedic poojas, homas and rituals performed by Vedic Priest S. Kasthuriranga Bhattachariar, per Vaikhanasa tradition.

Built with React + Vite.

## Run locally

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/` — deployable as-is to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## Editing content

All text content (services list, speciality points, priest/contact details, FAQs, social links) lives in one place:
[`src/data/content.js`](src/data/content.js)

To change wording, add/remove a pooja, or update contact details, edit that file — no need to touch the components.

### Things to update before going live

- **Social links** in `content.js` (`socialLinks`) currently point to generic Facebook/Instagram/YouTube homepages as placeholders — replace with the real profile URLs.
- **WhatsApp / phone** numbers are wired to `+91 96294 76225` — update in `content.js` if this changes.

## Booking form → email notifications

"Book a Pooja" opens a popup asking for the visitor's name, the pooja they want, and a phone number or email. To have that enquiry land as an actual email in your inbox (instead of opening the visitor's own email app), wire up a free [Formspree](https://formspree.io) endpoint:

1. Sign up at formspree.io with the email you want enquiries delivered to (for now `srivatchu94@gmail.com`).
2. Create a new form and copy its endpoint URL (looks like `https://formspree.io/f/xxxxabcd`).
3. Create a file named `.env` in the project root (copy `.env.example`) and set:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxabcd
   ```
4. Restart `npm run dev` (or rebuild) so Vite picks up the new env var.
5. Formspree will send a confirmation link to that inbox the first time — click it once to activate the form. Every booking enquiry after that arrives as an email automatically.

To switch the receiving address later (e.g. to a professional email), either create a new Formspree form with that email and swap `VITE_FORM_ENDPOINT`, or update the notification email in the Formspree dashboard — no code changes needed.

If `VITE_FORM_ENDPOINT` is left empty, the form falls back to opening the visitor's email client with the enquiry pre-filled to `VITE_ENQUIRY_EMAIL` (also set in `.env`) — functional, but requires the visitor to hit send themselves.

## Structure

- `src/components/Header.jsx` — sticky nav + mobile menu
- `src/components/Hero.jsx` — banner with invocation, title, tagline
- `src/components/Services.jsx` — full pooja/homam list, each with a quick "Book" action
- `src/components/Specialty.jsx` — "Our Speciality" points
- `src/components/Contact.jsx` — priest details, phone/WhatsApp, social icons
- `src/components/Support.jsx` — FAQ accordion
- `src/components/Footer.jsx` — sitemap, contact recap, credit line
- `src/components/BookingModal.jsx` — the "Book a Pooja" popup form
- `src/lib/enquiry.js` — sends the booking form to Formspree (or falls back to `mailto:`)

Site created by Thinknink Digital.

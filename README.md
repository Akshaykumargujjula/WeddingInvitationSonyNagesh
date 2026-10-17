# Sri Laxmi & Nagesh Wedding Invitation Website

A premium, romantic, mobile-first Indian wedding invitation website built with **React + Vite**, **plain CSS**, and **JavaScript**.

---

## 💍 Wedding Highlights
- **Bride**: Chi. La. Sow. Sri Laxmi (చి.ల.సౌ. శ్రీలక్ష్మి)
- **Groom**: Chi. Nagesh (చి. నగేష్)
- **Auspicious Date**: Thursday, 3 December 2026
- **Subha Muhurtham**: 9:31 AM (Dhanur Lagnam / ధనుర్ లగ్నం)
- **Venue**: Sri Rama Gardens, Armoor Road, Nizamabad, Telangana
- **Google Maps**: [https://maps.app.goo.gl/mKQgTzXkruFhgTsm9](https://maps.app.goo.gl/mKQgTzXkruFhgTsm9)
- **Invitation PDF**: `/invitation.pdf`

---

## ✨ Features
1. **Royal Opening Envelope & Welcome Screen**: Tasteful Telugu wedding invitation envelope with golden wax seal ("S & N"), traditional marigold toranam, and smooth opening animation that unlocks audio on mobile.
2. **Color Palette & Aesthetics**: Deep rich maroon (`#4A0E17`), ivory cream (`#FAF6F0`), and champagne gold (`#D4AF37`) with traditional Telugu motifs (Kalasham, Lord Ganesha, Toranam, and ornamental filigree).
3. **Subtle Floating Petals**: Lightweight canvas particle shower (rose petals, marigold petals, gold sparkles) with `prefers-reduced-motion` compliance and a manual toggle button in the navbar.
4. **Floating Music Controller**: Auspicious traditional Indian wedding melody in Raga Mohanam (flute & tanpura) with play/pause button, animated equalizer, and graceful Web Audio API synthesizer fallback.
5. **Auspicious Muhurtham & Calendar Export**: Live countdown timer to 3 Dec 2026, 09:31 AM, rituals schedule, and one-click "Add to Calendar" (Google Calendar & Apple/Outlook `.ics` download).
6. **Venue Experience**: Full Sri Rama Gardens details, embedded map preview, copy address button, and functional "Get Directions" button linking directly to Google Maps.
7. **Dedicated Invitation PDF Modal**: Dedicated full invitation viewer with "Open Full Invitation (PDF)" (reliable on mobile without login), direct download, and authentic Telugu Patrika preview.
8. **Configurable Pre-Wedding Video**: Centralized in `src/weddingConfig.js`. When `preWeddingVideoUrl` is empty `""`, the section and navigation action are automatically hidden. To enable, simply paste a YouTube/Vimeo/MP4 URL and deploy!

---

## 🚀 Running Locally
```bash
# Install dependencies (already installed)
npm install

# Start development server
npm run dev
# -> http://localhost:5173/

# Create optimized production build
npm run build
```

---

## 🌐 Deploying to Vercel or Netlify
This project is configured out-of-the-box for single-click deployment:
- **Vercel**: `vercel.json` rewrite and PDF headers included.
- **Netlify**: `netlify.toml` and `public/_redirects` included.
- **Root Directory**: `.`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

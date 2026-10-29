# Fitness First Gym website

React + Vite + Framer Motion + Lucide icons. Plain CSS in `src/index.css`.

## Run it in VS Code
1. Install Node.js 18 or newer from https://nodejs.org.
2. Open this folder in VS Code (File > Open Folder), then open the terminal (Terminal > New Terminal).
3. Run `npm install`, then `npm run dev`.
4. Open the address it prints (usually http://localhost:5173).
5. For the live version, run `npm run build`. The finished site is in the `dist` folder. Upload it to any host (Netlify, Vercel, GitHub Pages).

## Change contact details and opening hours (`src/data/gymData.js`)
- Phone number: change `phone`. The call button, WhatsApp link and footer all update. A Pakistani mobile like 03335295431 becomes 923335295431 for WhatsApp automatically.
- Opening hours: change `schedule.sessions` (minutes after midnight, so 6:30 AM is 390 and 10:00 PM is 1320). `closedDays` uses 0 for Sunday. The hours table, footer and Open/Closed badge all follow.
- Also update the phone and hours inside the `<script type="application/ld+json">` block in `index.html` (Google search information).
- Address and map: change `address`. The map and direction buttons use it as a search, not an exact pin.
- Facilities: edit the `facilities` list. Strength Training and Free Weights use matching gym photos from the gallery and fall back to their crops in `public/images/facilities/` if needed. Cardio and Workout Space use their facility crops. Change the `image` path to swap a photo.

## Manage the gallery (`src/data/gallery.js` and `public/images/gallery/`)
1. **Add a photo:** copy the file into `public/images/gallery/`, then add a line to `gallery.js`: `{ src: '/images/gallery/name.jpg', caption: 'Your caption', category: 'Equipment', width: 1200, height: 800 }`. Width and height are the image size in pixels (right-click the file > Properties). Keep images under about 300 KB.
2. **Replace a photo:** save the new file with the same name in the same folder (or change `src`).
3. **Remove a photo:** delete its line in `gallery.js` (and the file, if you like).
4. **Change a caption:** edit `caption`.
5. **Add a category:** give photos a `category`. Filter buttons appear once there are two or more categories.

If a file is missing, the site shows a "Photo unavailable" tile instead of breaking.

## External services and fallbacks
- Google Fonts (Anton, Barlow): falls back to Impact and system fonts if offline.
- Google Maps embed: if it does not load, the Get Directions button still opens Google Maps.
- No video is used. The hero is a photo with motion effects, so nothing essential depends on video.
- The hero and About photos are your owner photo (`public/images/hero/owner-hero.jpg`). To change it, replace that file.
- Motion is switched off automatically for visitors who set "reduce motion" on their device.

// ===== Edit gym details here. The whole site reads from this file. =====
export const gym = {
  name: 'Fitness First Gym',
  area: 'Koral, Islamabad, Pakistan',
  address: 'Fitness First Gym Koral, Koral, Islamabad, Pakistan',
  phone: '03335295431',
  timezone: 'Asia/Karachi',
  heroImage: '/images/hero/owner-hero.jpg',
  heroSize: [1075, 1432],
};

// Opening hours: minutes after midnight (6:30 AM = 390). Day numbers: 0 = Sunday ... 6 = Saturday.
export const schedule = {
  sessions: [[390, 600], [960, 1380]], // 6:30-10:00 AM and 4:00-11:00 PM
  closedDays: [0],
};
export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Links built from the details above
const isPkMobile = /^03\d{9}$/.test(gym.phone);
export const whatsappNumber = isPkMobile ? '92' + gym.phone.slice(1) : gym.phone.replace(/\D/g, '');
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Fitness First Gym, I would like membership information.')}`;
const q = encodeURIComponent(gym.address);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${q}&output=embed`;

// Facility photos are crops of real gym photos in public/images/facilities/. Replace a file (same name) or change `image` to swap it.
export const aboutImage = { src: '/images/gallery/gym-floor.jpg', size: [1080, 1438] };
const galleryPhoto = (filename) => `/images/gallery/${encodeURIComponent(filename)}`;
export const facilities = [
  { title: 'Strength Training', icon: 'Dumbbell', text: 'Machines and benches to build strength. Visit or call to see what is available in this area.', image: galleryPhoto('WhatsApp Image 2026-10-29 at 4.38.09 PM (1).jpeg'), imageFallback: '/images/facilities/strength.jpg' },
  { title: 'Cardio', icon: 'HeartPulse', text: 'Treadmills and exercise bikes to raise your heart rate. Ask the team what is available.', image: '/images/facilities/cardio.jpg' },
  { title: 'Free Weights', icon: 'Weight', text: 'Plates, bars and racks for free-weight training. Come in and take a look.', image: galleryPhoto('WhatsApp Image 2026-10-29 at 4.38.10 PM (3).jpeg'), imageFallback: '/images/facilities/free-weights.jpg' },
  { title: 'Workout Space', icon: 'Move', text: 'Room to move and train your way. Come in and see the floor.', image: '/images/facilities/workout-space.jpg' },
];

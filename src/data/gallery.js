// ===== Gallery: one object per photo. Put image files in public/images/gallery/ =====
// src: path starting with /images/gallery/   caption: shown in the lightbox
// category: optional, filter buttons appear automatically   width/height: image size in pixels (prevents layout jumps)
const photo = (filename) => `/images/gallery/${encodeURIComponent(filename)}`;

export const gallery = [
  { src: '/images/gallery/cardio-and-weights.jpg', caption: 'Treadmill, exercise bike and barbell area', category: 'Equipment', width: 1200, height: 882 },
  { src: '/images/gallery/strength-machines.jpg', caption: 'Strength machines and benches', category: 'Equipment', width: 1080, height: 1435 },
  { src: '/images/gallery/gym-floor.jpg', caption: 'The training floor at Fitness First Gym, Koral', category: 'Gym floor', width: 1080, height: 1438 },
  { src: '/images/gallery/training-cap.jpg', caption: 'Training at Fitness First Gym', category: 'Training', width: 1080, height: 1423 },
  { src: '/images/gallery/training-mirror.jpg', caption: 'Mirror check at Fitness First Gym', category: 'Training', width: 1075, height: 1432 },
  { src: '/images/gallery/owner-in-gym.jpg', caption: 'Training at Fitness First Gym, Koral', category: 'Training', width: 900, height: 1199 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.09 PM.jpeg'), caption: 'Training equipment and workout area', category: 'Gym floor', width: 1600, height: 915 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.09 PM (1).jpeg'), caption: 'Strength machines and training stations', category: 'Equipment', width: 1600, height: 1198 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.10 PM.jpeg'), caption: 'Benches and open training floor', category: 'Gym floor', width: 1600, height: 714 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.10 PM (1).jpeg'), caption: 'Inside Fitness First Gym', category: 'Gym floor', width: 1600, height: 1207 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.10 PM (2).jpeg'), caption: 'Strength training at Fitness First Gym', category: 'Training', width: 1080, height: 1473 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.10 PM (3).jpeg'), caption: 'Deadlift training with a loaded barbell', category: 'Training', width: 1080, height: 1047 },
  { src: photo('WhatsApp Image 2026-10-29 at 4.38.11 PM.jpeg'), caption: 'Training at Fitness First Gym', category: 'Training', width: 1080, height: 1508 },
];

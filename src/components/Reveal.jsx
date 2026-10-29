import { motion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1];

// Fade and rise into view once
export default function Reveal({ as = 'div', delay = 0, y = 40, children, ...rest }) {
  const Tag = motion[as];
  return <Tag initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease, delay }} {...rest}>{children}</Tag>;
}

// Wipe an image into view from left to right
export function Mask({ delay = 0, children, ...rest }) {
  return <motion.div initial={{ clipPath: 'inset(0 100% 0 0)' }} whileInView={{ clipPath: 'inset(0 0% 0 0)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1], delay }} {...rest}>{children}</motion.div>;
}

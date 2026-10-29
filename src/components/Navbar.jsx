import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { gym } from '../data/gymData';

const links = [['Home', 'home'], ['About', 'about'], ['Facilities', 'facilities'], ['Gallery', 'gallery'], ['Opening Hours', 'hours'], ['Location', 'location'], ['Contact', 'contact']];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1021px)');
    const closeMenuOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', closeMenuOnDesktop);
    return () => desktop.removeEventListener('change', closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <motion.header className={`nav ${solid || open ? 'solid' : ''}`} initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
      <a href="#home" className="logo" aria-label={`${gym.name}, home`}>FITNESS<span>FIRST</span></a>
      <nav className="links" aria-label="Primary">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>{label}</a>)}
      </nav>
      <a className="btn pri sm" href={`tel:${gym.phone}`}><Phone size={16} />Call Now</a>
      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.nav id="mobile-menu" className="mobile" aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {links.map(([label, id]) => (
                <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
}

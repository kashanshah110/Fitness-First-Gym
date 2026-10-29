import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { gallery } from '../data/gallery';
import Reveal from './Reveal';

const FALLBACK = 'data:image/svg+xml,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'><rect width='100%' height='100%' fill='#161616'/><text x='50%' y='50%' fill='#888' font-family='sans-serif' font-size='28' text-anchor='middle'>Photo unavailable</text></svg>");
const onError = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK; };

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [sel, setSel] = useState(null);
  const cats = useMemo(() => ['All', ...new Set(gallery.map((g) => g.category).filter(Boolean))], []);
  const items = gallery.filter((g) => cat === 'All' || g.category === cat);
  const close = useCallback(() => setSel(null), []);
  const step = useCallback((d) => setSel((i) => (i + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (sel === null) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [sel, close, step]);

  const current = sel !== null ? items[sel] : null;
  return (
    <section id="gallery" className="sec">
      <div className="wrap">
        <Reveal><p className="eyebrow">Gym gallery</p></Reveal>
        <Reveal as="h2" delay={0.1}>Inside the <em>gym.</em></Reveal>
        {cats.length > 2 && (
          <div className="chips" role="group" aria-label="Filter photos">
            {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
          </div>
        )}
        {items.length === 0 ? <p className="lead">Photos coming soon.</p> : (
          <div className="masonry">
            {items.map((g, i) => (
              <div key={g.src} className="tile">
                <button onClick={() => setSel(i)} aria-label={`Open photo: ${g.caption}`}>
                  <img src={g.src} width={g.width} height={g.height} alt={g.caption} loading="lazy" onError={onError} />
                  <span>{g.caption}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {current && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <button className="lb-close" onClick={close} aria-label="Close" autoFocus><X /></button>
            {items.length > 1 && <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo"><ChevronLeft size={32} /></button>}
            <figure onClick={(e) => e.stopPropagation()}>
              <motion.img key={current.src} src={current.src} alt={current.caption} onError={onError} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} />
              <figcaption>{current.caption} <small>{sel + 1} / {items.length}</small></figcaption>
            </figure>
            {items.length > 1 && <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo"><ChevronRight size={32} /></button>}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

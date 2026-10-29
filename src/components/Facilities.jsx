import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Weight, Move } from 'lucide-react';
import Reveal from './Reveal';
import { facilities } from '../data/gymData';

const icons = { Dumbbell, HeartPulse, Weight, Move };

export default function Facilities() {
  return (
    <section id="facilities" className="sec dark">
      <div className="wrap">
        <Reveal><p className="eyebrow">Facilities</p></Reveal>
        <Reveal as="h2" delay={0.1}>Train your <em>way.</em></Reveal>
        <div className="fac-list">
          {facilities.map((f, i) => {
            const Icon = icons[f.icon] || Dumbbell;
            return (
              <article className={`fac ${i % 2 ? 'flip' : ''}`} key={f.title}>
                <div className="fac-visual">
                  {f.image ? <img src={f.image} width="1080" height="675" alt={`${f.title} area at Fitness First Gym`} loading="lazy" onError={(event) => {
                    if (!f.imageFallback) return;
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = f.imageFallback;
                  }} /> : <div className="fac-ph" aria-hidden="true"><span>0{i + 1}</span><div><Icon size={64} strokeWidth={1.25} /><small>Photo coming soon</small></div></div>}
                </div>
                <Reveal className="fac-copy" delay={0.15}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

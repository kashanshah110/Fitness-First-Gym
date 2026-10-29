import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { gym, whatsappUrl } from '../data/gymData';

const ease = [0.22, 1, 0.36, 1];
const lines = [['YOUR', 'STRENGTH.'], ['YOUR', 'STORY.'], ['YOUR', 'FITNESS.']];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const textFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  let n = 0;

  return (
    <section id="home" ref={ref} className="hero grain">
      <motion.div className="hero-glow" aria-hidden="true" animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="hero-photo" style={{ y: photoY }}>
        {/* Mask reveals the photo top-to-bottom, then it slowly pushes out like a camera move */}
        <motion.div className="hero-mask" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.4, ease, delay: 0.1 }}>
          <motion.img src={gym.heroImage} width={gym.heroSize[0]} height={gym.heroSize[1]} alt="The owner of Fitness First Gym flexing in front of a mirror inside the gym" fetchPriority="high" initial={{ scale: 1.2 }} animate={{ scale: 1.03 }} transition={{ duration: 14, ease: 'easeOut' }} />
        </motion.div>
      </motion.div>

      <motion.div className="wrap hero-in" style={{ opacity: textFade }}>
        <motion.p className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8, ease }}>{gym.name} / Koral, Islamabad</motion.p>
        <h1 aria-label="Your strength. Your story. Your fitness.">
          {lines.map((words, li) => (
            <span className="h1-line" key={li} aria-hidden="true">
              {words.map((w) => (
                <motion.span key={w} className={w === 'STRENGTH.' || w === 'STORY.' || w === 'FITNESS.' ? 'acc' : ''} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.6 + 0.12 * n++ }}>{w}&nbsp;</motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.9, ease }}>
          Welcome to Fitness First Gym in Koral, Islamabad. Step inside, look around and start your next chapter.
        </motion.p>
        <motion.div className="cta-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.9, ease }}>
          <a className="btn pri" href="#contact">Join the gym</a>
          <a className="btn" href="#about">Explore the gym</a>
          <a className="wa-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp us</a>
        </motion.div>
      </motion.div>

      <motion.a href="#about" className="scroll-cue" aria-label="Scroll to About" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}><ArrowDown size={22} /></motion.span>
        <small>Scroll</small>
      </motion.a>
    </section>
  );
}

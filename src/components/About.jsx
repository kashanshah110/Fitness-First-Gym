import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import { gym, aboutImage } from '../data/gymData';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const big = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const small = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const word = useTransform(scrollYProgress, [0, 1], ['6%', '-12%']);
  return (
    <section id="about" ref={ref} className="sec">
      <div className="wrap about">
        <div className="about-copy">
          <Reveal><p className="eyebrow">About the gym</p></Reveal>
          <Reveal as="h2" delay={0.1}>Built for your <em>next level.</em></Reveal>
          <Reveal delay={0.2}><p className="lead">{gym.name} is in Koral, Islamabad. Come in, look around and see the space for yourself.</p></Reveal>
          <Reveal delay={0.3}><a className="btn" href="#gallery">See the gym</a></Reveal>
        </div>
        <div className="about-art">
          <motion.span className="art-word" aria-hidden="true" style={{ y: word }}>KORAL</motion.span>
          <div className="art-main"><motion.img style={{ y: big }} src={gym.heroImage} width={gym.heroSize[0]} height={gym.heroSize[1]} loading="lazy" alt="Mirror photo taken inside Fitness First Gym" /></div>
          <div className="art-small"><motion.img style={{ y: small }} src={aboutImage.src} width={aboutImage.size[0]} height={aboutImage.size[1]} loading="lazy" alt="The training floor inside Fitness First Gym" /></div>
        </div>
      </div>
    </section>
  );
}

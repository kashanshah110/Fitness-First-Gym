import { MessageCircle, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { gym, whatsappUrl } from '../data/gymData';

export default function Contact() {
  return (
    <section id="contact" className="sec contact grain">
      <div className="wrap">
        <Reveal><p className="eyebrow">Contact</p></Reveal>
        <Reveal as="h2" delay={0.1}>Ready to <em>start?</em></Reveal>
        <Reveal delay={0.2}><p className="lead">Call or message us on WhatsApp to ask about membership.</p></Reveal>
        <Reveal delay={0.3}><a className="bignum" href={`tel:${gym.phone}`}>{gym.phone}</a></Reveal>
        <Reveal delay={0.4} className="cta-row">
          <a className="btn pri" href={`tel:${gym.phone}`}><Phone size={18} />Call now</a>
          <a className="btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a>
        </Reveal>
      </div>
    </section>
  );
}

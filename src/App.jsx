import { MotionConfig } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import OpeningHours from './components/OpeningHours';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { whatsappUrl } from './data/gymData';

export default function App() {
  return (
    // reducedMotion="user" turns off movement for visitors who ask their device for less motion
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero /><About /><Facilities /><Gallery /><OpeningHours /><Location /><Contact />
      </main>
      <Footer />
      <a className="wa-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={26} /></a>
    </MotionConfig>
  );
}

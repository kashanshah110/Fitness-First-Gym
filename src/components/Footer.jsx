import { gym, schedule } from '../data/gymData';
import { fmt } from '../utils/schedule';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div><a href="#home" className="logo">FITNESS<span>FIRST</span></a><p className="mut">{gym.address}</p></div>
        <nav aria-label="Footer"><a href="#about">About</a><a href="#facilities">Facilities</a><a href="#gallery">Gallery</a><a href="#hours">Opening Hours</a><a href="#location">Location</a><a href="#contact">Contact</a></nav>
        <div><p>Monday to Saturday</p><p className="mut">{schedule.sessions.map(([s, e]) => `${fmt(s)} - ${fmt(e)}`).join(' and ')}</p><p className="mut">Sunday closed</p></div>
        <div><a href={`tel:${gym.phone}`}>{gym.phone}</a></div>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} {gym.name}. All rights reserved.</p>
    </footer>
  );
}

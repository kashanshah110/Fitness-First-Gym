import { MapPin, Navigation, Phone } from 'lucide-react';
import Reveal, { Mask } from './Reveal';
import { gym, mapsUrl, directionsUrl, mapEmbedUrl } from '../data/gymData';

export default function Location() {
  return (
    <section id="location" className="sec">
      <div className="wrap loc">
        <div>
          <Reveal><p className="eyebrow">Location</p></Reveal>
          <Reveal as="h2" delay={0.1}>Find us in <em>Koral.</em></Reveal>
          <Reveal delay={0.2}>
            <p className="lead"><MapPin size={20} className="inl" />{gym.address}</p>
            <div className="cta-row">
              <a className="btn pri" href={directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation size={18} />Get directions</a>
              <a className="btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              <a className="btn" href={`tel:${gym.phone}`}><Phone size={18} />Call the gym</a>
            </div>
          </Reveal>
        </div>
        <Mask className="map"><iframe title="Map showing Fitness First Gym, Koral, Islamabad" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Mask>
      </div>
    </section>
  );
}

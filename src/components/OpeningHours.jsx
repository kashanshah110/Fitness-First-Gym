import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { DAYS, schedule } from '../data/gymData';
import { fmt, getStatus } from '../utils/schedule';

const order = [1, 2, 3, 4, 5, 6, 0]; // Monday first

export default function OpeningHours() {
  // Status is calculated in Pakistan time and refreshed every 30 seconds
  const [status, setStatus] = useState(getStatus());
  useEffect(() => { const t = setInterval(() => setStatus(getStatus()), 30000); return () => clearInterval(t); }, []);
  return (
    <section id="hours" className="sec dark">
      <div className="wrap hours">
        <div>
          <Reveal><p className="eyebrow">Opening hours</p></Reveal>
          <Reveal as="h2" delay={0.1}>Two sessions. <em>Six days.</em></Reveal>
          <Reveal delay={0.2}>
            <p className={`status ${status.open ? 'open' : ''}`} role="status"><i aria-hidden="true" />{status.text}</p>
            <small className="mut">Times shown in Pakistan time.</small>
          </Reveal>
        </div>
        <ul className="week">
          {order.map((d, i) => {
            const closed = schedule.closedDays.includes(d);
            return (
              <Reveal as="li" key={d} y={20} delay={i * 0.06} className={`day ${closed ? 'closed' : ''} ${status.day === d ? 'today' : ''}`}>
                <strong>{DAYS[d]}</strong>
                {closed ? <span className="tag">Closed</span> : <span>{schedule.sessions.map(([s, e]) => `${fmt(s)} - ${fmt(e)}`).join('   |   ')}</span>}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { ExternalLink, Star } from 'lucide-react';
import Reveal from './Reveal';
import { mapsUrl } from '../data/gymData';

const reviews = [
  {
    name: 'Zamin Shah (Zamo)',
    details: '5 reviews · 1 photo',
    date: '3 months ago',
    text: 'Fitness First is absolutely amazing! The vibe here is so positive and energetic. The machines are top-notch and upgraded, making workouts highly motivating. Best of all, the trainers are incredibly supportive and guide you at every step. It is truly the perfect place for fitness!',
  },
  {
    name: 'Muhammad Zubair',
    details: '9 reviews · 7 photos',
    date: 'a year ago',
    text: 'Excellent gym friendly peoples and very professional and friendly trainer',
  },
  {
    name: 'Muhammad Zubair',
    details: '9 reviews · 7 photos',
    date: 'a year ago',
    text: 'Excellent gym friendly peoples and very professional and friendly trainer',
  },
  {
    name: 'Shan Ali',
    details: '1 review',
    date: 'a month ago',
    text: 'best gym in town... Gym owner great person',
  },
  {
    name: 'Ghulam Mustafa',
    details: '1 review',
    date: '6 months ago',
    text: "Recently I Join This GYM.....And I'm Very Impress For His Services..... Awesome Environment.....Staff Well behaviour.... Specially The GYM Trainer Teach Us So Good.... I recommend To All Of You To Join This GYM And Make Your Future Bright.....",
  },
];

const ratingRows = [5, 4, 3, 2, 1];

function Stars({ className = '' }) {
  return (
    <span className={`review-stars ${className}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="sec dark">
      <div className="wrap">
        <Reveal><p className="eyebrow">Member reviews</p></Reveal>
        <Reveal as="h2" delay={0.1}>Good people. <em>Great energy.</em></Reveal>

        <Reveal className="reviews-summary" delay={0.15}>
          <div className="rating-bars" aria-hidden="true">
            {ratingRows.map((rating, i) => (
              <div className="rating-row" key={rating}>
                <span>{rating}</span><div className="rating-track"><i style={{ width: `${[100, 5, 2, 1, 2][i]}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="rating-score">
            <strong>4.9</strong>
            <Stars />
            <span>228 reviews</span>
          </div>
        </Reveal>

        <div className="review-grid">
          {reviews.map((review, i) => (
            <Reveal as="article" className="review-card" delay={0.08 * (i % 3)} key={`${review.name}-${i}`}>
              <div className="review-heading">
                <div className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</div>
                <div className="review-person">
                  <h3>{review.name}</h3>
                  <p>{review.details}</p>
                </div>
              </div>
              <div className="review-meta"><Stars /><time>{review.date}</time></div>
              <p className="review-text">{review.text}</p>
            </Reveal>
          ))}
        </div>

        <a className="reviews-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Find us on Google Maps <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

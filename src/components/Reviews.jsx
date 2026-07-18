import useReveal from '../useReveal.js'
import { REVIEWS } from '../data.js'

// Light "surfacing to the sand" section. Ships with clearly-labelled
// sample quotes — swap in real guest reviews via src/data.js.
export default function Reviews() {
  const ref = useReveal()
  return (
    <section className="reviews" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">Guest stories</p>
        <h2 className="section-title reveal">
          Salt water, <em>sweet words.</em>
        </h2>
        <p className="section-sub reveal">
          Layout preview with sample quotes — real guest reviews land here as
          soon as they roll in.
        </p>
      </div>
      <ul className="snap-row reviews-row">
        {REVIEWS.map((r, i) => (
          <li
            key={i}
            className="review reveal"
            style={{ '--reveal-delay': `${i * 0.08}s` }}
          >
            <div className="review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>{r.text}</blockquote>
            <footer>
              <strong>{r.who}</strong>
              <span>{r.where}</span>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}

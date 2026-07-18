import useReveal from '../useReveal.js'
import { ACTIVITIES, waLink } from '../data.js'
import {
  IconJetski,
  IconParasail,
  IconTube,
  IconSail,
  IconSnorkel,
  IconSup,
} from './Icons.jsx'

const ICONS = {
  jetski: IconJetski,
  parasail: IconParasail,
  tube: IconTube,
  sail: IconSail,
  snorkel: IconSnorkel,
  sup: IconSup,
}

export default function Activities() {
  const ref = useReveal()
  return (
    <section className="activities" id="activities" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">What we do</p>
        <h2 className="section-title reveal">
          Pick your kind
          <br />
          of <em>blue.</em>
        </h2>
        <p className="section-sub reveal">
          From full-throttle adrenaline to slow golden-hour sails — swipe
          through and message us the one that makes your heart race.
        </p>
      </div>
      <ul className="snap-row cards-row">
        {ACTIVITIES.map((a, i) => {
          const Icon = ICONS[a.icon]
          return (
            <li
              key={a.id}
              className="act-card reveal"
              style={{ '--reveal-delay': `${i * 0.07}s`, '--hue': a.hue }}
            >
              <div className="act-icon">
                <Icon />
              </div>
              <h3 className="act-name">{a.name}</h3>
              <p className="act-tag">{a.tagline}</p>
              <div className="act-meta">
                <span>{a.duration}</span>
                <span className="act-price">
                  from <strong>${a.price}</strong>
                </span>
              </div>
              <a
                className="act-book"
                href={waLink(
                  `Hi Sea Sail! I'd like to book: ${a.name}. When is the next slot?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book {a.name} →
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

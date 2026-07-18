import useReveal from '../useReveal.js'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data.js'
import { IconInstagram, IconPlay } from './Icons.jsx'

// v001: crafted "reel" tiles linking to the profile. Once the owner
// connects the account (Behold/LightWidget — see PLAN.md) these become
// live, auto-updating post thumbnails.
const TILES = [
  { label: 'Jet ski runs', hue: 186 },
  { label: 'Parasail views', hue: 205 },
  { label: 'Reef life', hue: 168 },
  { label: 'Sunset sails', hue: 24 },
  { label: 'Guest moments', hue: 194 },
  { label: 'Island time', hue: 176 },
]

export default function InstagramFeed() {
  const ref = useReveal()
  return (
    <section className="insta" id="instagram" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">On Instagram</p>
        <h2 className="section-title reveal">
          Fresh from <em>the lagoon.</em>
        </h2>
        <p className="section-sub reveal">
          Every ride ends up on our feed — tap through for the latest reels
          from @{INSTAGRAM_HANDLE}.
        </p>
        <ul className="insta-grid">
          {TILES.map((t, i) => (
            <li
              key={t.label}
              className="insta-tile reveal"
              style={{ '--reveal-delay': `${i * 0.05}s`, '--hue': t.hue }}
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.label} — watch on Instagram`}
              >
                <span className="insta-play">
                  <IconPlay />
                </span>
                <span className="insta-label">{t.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="insta-follow reveal">
          <a
            className="btn-ghost"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}

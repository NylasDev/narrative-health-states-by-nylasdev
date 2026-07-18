import { waLink } from '../data.js'

// Full-screen crafted ocean scene: layered gradients, sun shimmer,
// drifting swell lines and a breaking-surface wave at the bottom.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-sky" aria-hidden="true" />
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-shimmer" aria-hidden="true" />

      {/* drifting swell lines */}
      <svg
        className="hero-swell"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <g fill="none" strokeLinecap="round">
          <path
            className="swell s1"
            d="M-100 430c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0"
            stroke="rgba(127,205,255,0.20)"
            strokeWidth="2"
          />
          <path
            className="swell s2"
            d="M-100 490c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0"
            stroke="rgba(30,205,203,0.28)"
            strokeWidth="2.5"
          />
          <path
            className="swell s3"
            d="M-100 550c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0"
            stroke="rgba(222,243,246,0.18)"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="hero-inner wrap">
        <p className="hero-chrome" aria-hidden="true">
          3.20°N&thinsp;·&thinsp;73.22°E&ensp;—&ensp;Indian Ocean
        </p>
        <h1 className="hero-title">
          The lagoon
          <br />
          is <em>calling.</em>
        </h1>
        <p className="hero-sub">
          Jet ski, parasail, sail &amp; snorkel the crystal waters of the
          Maldives — with the crew that knows them best.
        </p>
        <div className="hero-actions">
          <a
            className="btn-cta"
            href={waLink('Hi Sea Sail! I would like to book an activity.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your ride
          </a>
          <a className="btn-ghost" href="#activities">
            Explore activities
          </a>
        </div>
      </div>

      <a className="hero-scrollcue" href="#activities" aria-label="Scroll down">
        <span className="scroll-dot" aria-hidden="true" />
      </a>
    </section>
  )
}

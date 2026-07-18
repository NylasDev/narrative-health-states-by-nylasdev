import useReveal from '../useReveal.js'
import { waLink } from '../data.js'

// Full-bleed "signature experience" block — parasailing, with
// instrument-style stat chrome over a crafted sky-to-sea gradient.
export default function Signature() {
  const ref = useReveal()
  return (
    <section className="signature" ref={ref}>
      <div className="signature-scene" aria-hidden="true">
        <div className="sig-cloud c1" />
        <div className="sig-cloud c2" />
        <svg className="sig-chute" viewBox="0 0 120 120" aria-hidden="true">
          <path
            d="M20 38a42 42 0 0 1 80 0c-13-5-27-8-40-8s-27 3-40 8Z"
            fill="rgba(255,127,80,0.9)"
          />
          <path
            d="M28 40l28 38M92 40 64 78"
            stroke="rgba(222,243,246,0.75)"
            strokeWidth="1.6"
          />
          <path
            d="M56 78h9l2 9h-13l2-9Z"
            fill="rgba(4,28,50,0.9)"
          />
        </svg>
      </div>
      <div className="wrap signature-inner">
        <p className="kicker reveal">Signature experience</p>
        <h2 className="section-title reveal">
          Seventy metres of <em>silence.</em>
        </h2>
        <p className="section-sub reveal">
          Lift off from the boat deck and watch the atoll unfold beneath you —
          rings of turquoise on deep indigo, and your footprints still on the
          sandbank below.
        </p>
        <dl className="sig-stats reveal">
          <div>
            <dt>Altitude</dt>
            <dd>~70 m</dd>
          </div>
          <div>
            <dt>Flight time</dt>
            <dd>15 min</dd>
          </div>
          <div>
            <dt>Take-off</dt>
            <dd>Boat deck</dd>
          </div>
          <div>
            <dt>Photos</dt>
            <dd>Included</dd>
          </div>
        </dl>
        <a
          className="btn-cta reveal"
          href={waLink("Hi Sea Sail! I'd like to book parasailing.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fly with us
        </a>
      </div>
    </section>
  )
}

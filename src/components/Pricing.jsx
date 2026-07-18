import useReveal from '../useReveal.js'
import { BUNDLES, waLink } from '../data.js'

export default function Pricing() {
  const ref = useReveal()
  return (
    <section className="pricing" id="pricing" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">Bundles</p>
        <h2 className="section-title reveal">
          More splash, <em>less cash.</em>
        </h2>
        <p className="section-sub reveal">
          Combos beat single rides every time. Prices are indicative — confirm
          your date on WhatsApp and we&rsquo;ll lock it in.
        </p>
      </div>
      <ul className="snap-row bundles-row">
        {BUNDLES.map((b, i) => (
          <li
            key={b.name}
            className={`bundle reveal${b.featured ? ' is-featured' : ''}`}
            style={{ '--reveal-delay': `${i * 0.08}s` }}
          >
            <p className="bundle-note">{b.note}</p>
            <h3 className="bundle-name">{b.name}</h3>
            <p className="bundle-price">
              <span className="bundle-from">from</span> ${b.price}
              <span className="bundle-per">/{b.per.replace('per ', '')}</span>
            </p>
            <ul className="bundle-items">
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <a
              className={b.featured ? 'btn-cta' : 'btn-ghost'}
              href={waLink(
                `Hi Sea Sail! I'm interested in the ${b.name} bundle.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book {b.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="pricing-note wrap reveal">
        * Indicative pricing based on typical Maldives watersport rates — final
        prices confirmed by the Sea Sail team on WhatsApp.
      </p>
    </section>
  )
}

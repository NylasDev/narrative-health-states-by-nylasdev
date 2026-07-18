import { useEffect, useRef } from 'react'

// Adds .is-visible to elements with .reveal inside the returned ref's
// subtree once they enter the viewport. Reveal once, then unobserve.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.classList.contains('reveal')
      ? [root]
      : [...root.querySelectorAll('.reveal')]
    if (targets.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}

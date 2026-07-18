// Line-icon set for activities — 1.8px strokes on a 48px grid.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wave = (
  <path d="M6 40c3.5 0 5.2-2.2 9-2.2s5.5 2.2 9 2.2 5.2-2.2 9-2.2 5.5 2.2 9 2.2" />
)

export function IconJetski() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M8 32c8-2 20-2 30-8l4 5c-6 5-24 7-34 6l0-3Z" />
      <path d="M24 24l6-8 5 2-4 7" />
      <path d="M30 16l-7-2" />
      {wave}
    </svg>
  )
}

export function IconParasail() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M8 12a17 17 0 0 1 32 0c-5-2-11-3-16-3s-11 1-16 3Z" />
      <path d="M12 13l10 15M36 13 26 28" />
      <path d="M22 28h5l1 5h-7l1-5Z" />
      {wave}
    </svg>
  )
}

export function IconTube() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <ellipse cx="24" cy="28" rx="15" ry="7" />
      <ellipse cx="24" cy="28" rx="6.5" ry="3" />
      <path d="M4 16c4-3 9 1 8 5M44 16c-4-3-9 1-8 5" />
      {wave}
    </svg>
  )
}

export function IconSail() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M24 6v26" />
      <path d="M24 8C18 14 14 22 13 30c4 1 8 1 11 0" />
      <path d="M27 12c3 4 6 10 6.5 17-2.5.7-5 .5-6.5 0" />
      <path d="M10 36h28l-3 4H13l-3-4Z" />
    </svg>
  )
}

export function IconSnorkel() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <rect x="10" y="14" width="18" height="10" rx="5" />
      <path d="M19 24v4c0 5 4 8 9 8s9-3 9-8V10" />
      <path d="M37 10h3" />
      <circle cx="19" cy="19" r="1" fill="currentColor" stroke="none" />
      {wave}
    </svg>
  )
}

export function IconSup() {
  return (
    <svg viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M6 34c10-3 26-3 36 0-10 4-26 4-36 0Z" />
      <path d="M30 8l-8 22" />
      <path d="M30 8c2-1 3 0 3 2" />
      <circle cx="21" cy="12" r="3" />
      {wave}
    </svg>
  )
}

export function IconWhatsApp({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1 7-12.59Zm-3.5 3.6c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.4 1.02 2.76 1.17 2.95.14.19 1.97 3.16 4.86 4.3 2.4.95 2.89.76 3.41.71.52-.05 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.34.21-.62.07-.29-.14-1.21-.44-2.3-1.42a8.6 8.6 0 0 1-1.6-1.98c-.16-.28-.02-.44.13-.58.13-.13.28-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.63-1.55-.89-2.12-.23-.55-.47-.48-.64-.48h-.52Z"
      />
    </svg>
  )
}

export function IconInstagram({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.81s0 3.55-.07 4.81c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.55 2.2 15.17 2.2 12s0-3.55.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.76c-3.15 0-3.52 0-4.76.07-1.08.05-1.66.23-2.05.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.05-.07 1.24-.07 1.61-.07 4.76s0 3.52.07 4.76c.05 1.08.23 1.66.38 2.05.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.05.38 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c1.08-.05 1.66-.23 2.05-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.05.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-1.08-.23-1.66-.38-2.05-.2-.51-.44-.88-.82-1.26a3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.05-.38-1.24-.07-1.61-.07-4.76-.07Zm0 3.06a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.76a3.22 3.22 0 1 0 0 6.45 3.22 3.22 0 0 0 0-6.45Zm5.2-3.08a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34Z"
      />
    </svg>
  )
}

export function IconPlay({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="rgba(4,28,50,0.45)" />
      <path d="M10 8.2v7.6l6-3.8-6-3.8Z" fill="#fff" />
    </svg>
  )
}

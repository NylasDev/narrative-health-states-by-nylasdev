import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is switchable so the same build works on GitHub Pages project
// hosting (/<repo>/) and on root-hosted previews.
export default defineConfig({
  plugins: [react()],
  base: process.env.SITE_BASE || '/',
})

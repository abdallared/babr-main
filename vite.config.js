import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset URLs so one build works both at a domain root (babar.ly)
  // and under a GitHub Pages project subpath (/babr/).
  base: './',
  server: { port: 5180 },
})

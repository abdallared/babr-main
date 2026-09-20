import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BLOG_POSTS } from '../src/lib/blogData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist! Run vite build first.')
  process.exit(1)
}

const indexHtmlPath = path.join(distDir, 'index.html')
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found!')
  process.exit(1)
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8')

// 1. Ensure 404.html exists as a copy of index.html for SPA fallback on GitHub Pages
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml)
console.log('✓ Generated dist/404.html')

// 2. Pre-generate physical route folders and index.html files so GitHub Pages serves 200 OK directly on refresh!
const staticRoutes = [
  'about',
  'blog',
  ...BLOG_POSTS.map((post) => `blog/${post.slug}`),
]

for (const route of staticRoutes) {
  const targetDir = path.join(distDir, route)
  fs.mkdirSync(targetDir, { recursive: true })
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml)
  console.log(`✓ Generated dist/${route}/index.html`)
}

// 3. Ensure .nojekyll exists
fs.writeFileSync(path.join(distDir, '.nojekyll'), '')

// 4. Fallback _redirects for Netlify / Cloudflare Pages
fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200\n')

console.log('SPA postbuild routes setup complete!')

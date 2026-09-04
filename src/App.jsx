import { Nav } from './components/Nav'
import { CursorGlow, ScrollProgress } from './components/Interactive'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Stats } from './sections/Stats'
import { Identity } from './sections/Identity'
import { Work } from './sections/Work'
import { Process } from './sections/Process'
import { About } from './sections/About'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="grain relative">
      <ScrollProgress />
      <CursorGlow />
      <Nav />

      <main>
        <Hero />
        <Services />
        <Stats />
        <Identity />
        <Work />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

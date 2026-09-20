import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Stats } from '../sections/Stats'
import { Identity } from '../sections/Identity'
import { Work } from '../sections/Work'
import { Partners } from '../sections/Partners'
import { Process } from '../sections/Process'
import { AboutCta } from '../sections/AboutCta'
import { Faq } from '../sections/Faq'
import { Contact } from '../sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Identity />
      <Work />
      <Partners />
      <Process />
      <AboutCta />
      <Faq />
      <Contact />
    </main>
  )
}

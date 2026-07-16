import Hero from '../components/Hero'
import SignatureMoment from '../components/SignatureMoment'
import Services from '../components/Services'
import StatsBar from '../components/StatsBar'
import About from '../components/About'
import ContactCTA from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureMoment />
      <StatsBar />
      <Services />
      <About />
      <ContactCTA />
    </>
  )
}
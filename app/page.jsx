import Cta from "@/components/Cta"
import Hero from "@/components/Hero"
import HomeContact from "@/components/HomeContact"
import HomeServices from "@/components/HomeServices"
import NextHero from "@/components/NextHero"
import Testimonials from "@/components/Testimonials"
import Whychoose from "@/components/Whychoose"

const Home = () => {
  return (
    <div>
      <Hero />
      <NextHero />
      <HomeServices />
      <Whychoose />
      <HomeContact />
      <Testimonials />
      <Cta />

    </div>
  )
}

export default Home

import Navbar from '../../components/website/Navbar'
import HeroSection from '../../components/website/HeroSection'
import Tools from '../../components/website/Tools'
import About from '../../components/website/About'
import WhyChoose from '../../components/website/WhyChoose'
import WhyMts from '../../components/website/WhyMts'
import CounterComponent from '../../components/website/CounterComponent'
import CardComponent from '../../components/website/CardComponent'
import Plans from '../../components/website/Plans'
import Footer from '../../components/website/Footer'
import WhatsAppButton from '../../components/website/WhatsAppButton'
import TestimonialSlider from '../../components/website/Testimonials'


const UserHome = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Tools />
      <About />
      <WhyChoose />
      <WhyMts />
      <CounterComponent />
      <CardComponent />
      <Plans />
      <TestimonialSlider />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default UserHome

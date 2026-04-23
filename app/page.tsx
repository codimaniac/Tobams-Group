import ConsultantTraining from "@/components/ConsultantTraining"
import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import LMS from "@/components/LMS"
import Management from "@/components/Management"
import Testimonial from "@/components/Testimonial"
import Training from "@/components/Training"
import TransformationHub from "@/components/TransformationHub"


const Home = () => {
  return (
    <>
      <Hero />
      <LMS />
      <Training />
      <Management />
      <TransformationHub />
      <ConsultantTraining />
      <CTA />
      <Testimonial />
    </>
  )
}

export default Home
import ConsultantTrainingSection from "@/components/ConsultantTrainingSection"
import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import LMSSection from "@/components/LMSSection"
import ManagementSection from "@/components/ManagementSection"
import TrainingSection from "@/components/TrainingSection"
import TransformationHubSection from "@/components/TransformationHubSection"


const Home = () => {
  return (
    <>
      <Hero />
      <LMSSection />
      <TrainingSection />
      <ManagementSection />
      <TransformationHubSection />
      <ConsultantTrainingSection />
      <CTA />
    </>
  )
}

export default Home
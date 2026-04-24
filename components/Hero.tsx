import Image from "next/image"
import Button from "./Button"
import SectionLayout from "./SectionLayout"
import HeroImage from "@/assets/images/HeroImage.jpg"

const Hero = () => {
  return (
    <SectionLayout className="relative overflow-hidden flex flex-col items-center gap-3 py-28 px-16 text-white">
        <Image src={HeroImage} alt="Hero Image" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="flex flex-col items-center gap-3 z-10">
            <div className="bg-white/10 rounded-[100px] w-48.25 px-12 py-3 text-sm font-nunito-sans uppercase">
                What We Do
            </div>
            <h1 className="font-nunito text-[clamp(24px,4vw,56px)] font-bold">Training and Development</h1>
            <p className="text-center text-sm md:text-base font-semibold w-4/5 leading-[150%]">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&#39;s ever-evolving landscape.</p>
            <Button className="mt-7">Book a Consultation</Button>
        </div>
    </SectionLayout>
  )
}

export default Hero
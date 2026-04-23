import Image from "next/image"
import Button from "./Button"
import SectionLayout from "./SectionLayout"
import TransformationHub from "@/assets/images/TransformationHub.jpg"
import LightningOutline from "@/assets/icons/LightningOutline.svg"
import Arrow45 from "@/assets/icons/Arrow45Deg.svg"

const TransformationHubSection = () => {
  return (
    <SectionLayout className="bg-white py-16">
        <div className="flex flex-col gap-2 bg-[#ef4353]/20 p-10 rounded-2xl">
            <h3 className="font-nunito font-semibold italic text-pending-main text-[20px]">Learning with our CEO:</h3>
            <h2 className="font-nunito font-semibold text-[32px] text-primary italic mb-4">Transformation Hub With Jite Newton</h2>
            <p className="leading-[150%] text-main-text">Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
            <div className="flex gap-8 mt-4">
                <div className="relative flex-7 h-85 aspect-square overflow-hidden rounded-lg">
                    <Image src={TransformationHub} alt="A seasoned professional coaching a trainee" fill className="object-cover" />
                </div> 
                <div className="flex flex-col flex-8 gap-6">
                    <ul className="flex flex-wrap gap-6">
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />Strategic Career Guidance</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />Leadership Development</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />CV Development</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />Sustainability Leadership</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />Communication Skills</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 w-72"><Image src={LightningOutline} alt="Ligthning Icon" />Business Model</li>
                    </ul>
                    <Button className="w-fit text-white font-semibold">Learn More <Image src={Arrow45} alt="Arrow 45°" /></Button>
                </div>
            </div>
        </div>
    </SectionLayout>
  )
}

export default TransformationHubSection
import Image from "next/image"
import Button from "./Button"
import SectionLayout from "./SectionLayout"
import TransformationHubImage from "@/assets/images/TransformationHub.jpg"
import LightningOutline from "@/assets/icons/LightningOutline.svg"
import Arrow45 from "@/assets/icons/Arrow45Deg.svg"

const TransformationHub = () => {
  return (
    <SectionLayout className="bg-white py-16">
        <div className="flex flex-col gap-2 bg-[#ef4353]/20 p-5 lg:p-10 rounded-2xl">
            <h3 className="font-nunito font-semibold italic text-pending-main md:text-[20px]">Learning with our CEO:</h3>
            <h2 className="font-nunito font-semibold  text-[clamp(20px,3vw,32px)] text-primary italic mb-4">Transformation Hub With Jite Newton</h2>
            <p className="leading-[150%] text-main-text">Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&#39;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
            <div className="flex flex-col xl:flex-row gap-8 mt-4">
                <div className="relative flex-7 max-h-90 aspect-square overflow-hidden rounded-lg">
                    <Image src={TransformationHubImage} alt="A seasoned professional coaching a trainee" fill className="object-cover" />
                </div> 
                <div className="flex flex-col flex-8 gap-6 bg-white/30 p-5 md:py-8 md:px-5">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />Strategic Career Guidance</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />Leadership Development</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />CV Development</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />Sustainability Leadership</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />Communication Skills</li>
                        <li className="flex items-center gap-3.75 bg-white rounded-xl p-4 max-h-72"><Image src={LightningOutline} alt="Lightning icon" />Business Model</li>
                    </ul>
                    <Button className="w-fit text-white font-semibold">Learn More <Image src={Arrow45} alt="Right arrow icon" /></Button>
                </div>
            </div>
        </div>
    </SectionLayout>
  )
}

export default TransformationHub
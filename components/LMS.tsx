import Image from "next/image"
import SectionLayout from "./SectionLayout"
import Arrow45 from "@/assets/icons/Arrow45Deg.svg"
import LMCImage from "@/assets/images/LMCImage.jpg"
import Button from "./Button"

const LMS = () => {
  return (
    <div className="bg-background py-10">
        <SectionLayout className="flex items-center gap-20 bg-[#571244]/10 py-12">
            <div className="relative flex-1 aspect-square overflow-hidden rounded-full">
                <Image src={LMCImage} alt="Learning Platform" fill className="object-cover" />
            </div>
            <div className="flex flex-col flex-1 gap-8">
                <h2 className="font-nunito font-semibold text-[40px] text-primary">Learning Management System</h2>
                <div className="flex flex-col gap-5 text-main-text leading-[150%] bg-[#571244]/10 p-6 rounded-lg">
                    <p>TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&#39;s competitive tech landscape.</p>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-primary">Some of our courses include:</h3>
                        <ul className="list-disc list-inside flex flex-wrap justify-between">
                            <li>Business Analysis</li>
                            <li>Design Thinking</li>
                            <li>Effective Communication</li>
                            <li>Entrepreneurship</li>
                            <li>Career Development</li>
                            <li>Business Model</li>
                        </ul>
                    </div>
                </div>
                <Button className="w-fit text-white font-semibold">Learn More <Image src={Arrow45} alt="Arrow 45°" /></Button>
            </div>
        </SectionLayout>
    </div>
  )
}

export default LMS
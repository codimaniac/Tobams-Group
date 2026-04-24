import Image from "next/image"
import Button from "./Button"
import SectionLayout from "./SectionLayout"
import Arrow45 from "@/assets/icons/Arrow45Deg.svg"

const ConsultantTraining = () => {
  return (
    <div className="bg-background py-10">
        <SectionLayout className="flex items-center gap-20 bg-[#571244]/10 py-12">
            <div className="flex flex-col flex-1 gap-5">
                <h2 className="font-nunito font-semibold text-[clamp(24px,3vw,40px)] text-primary">Training The Consultant</h2>
                <h3 className="font-nunito font-semibold text-primary capitalize">Maximize your potential as a certified trainer:</h3>
                <div className="text-main-text leading-[150%]">
                    With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-5 text-white leading-[150%] bg-primary p-6 rounded-lg">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold">Expert-Led Learning</h3>
                        <p>Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold">Interactive Workshops</h3>
                        <p>Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold">Comprehensive Curriculum</h3>
                        <p>Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold">Global Recognition</h3>
                        <p>You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.</p>
                    </div>
                </div>
                <Button className="w-fit text-white font-semibold">Learn More <Image src={Arrow45} alt="Right arrow icon" /></Button>
            </div>
        </SectionLayout>
    </div>
  )
}

export default ConsultantTraining
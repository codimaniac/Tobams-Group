import Image from "next/image"
import SectionLayout from "./SectionLayout"
import ManagementImage from "@/assets/images/Management.jpg"
import Lightning from "@/assets/icons/Lightning.svg"

const Management = () => {
  return (
    <SectionLayout className="bg-background py-16 text-white">
        <div className="flex gap-12 bg-purple-80 p-10 rounded-[20px]">
            <div className="relative flex-1 aspect-square overflow-hidden rounded-lg rounded-br-none">
                <Image src={ManagementImage} alt="A seasoned professional coaching a trainee" fill className="object-cover" />
            </div> 
            <div className="flex flex-col flex-1 gap-5">
                <h2 className="font-nunito font-semibold text-[40px]">Management Development Program</h2>
                <div className="flex flex-col gap-5 leading-[150%]">
                    <p>Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.</p>
                    <p>Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.</p>
                </div>
                <ul className="flex flex-col gap-6 mt-5">
                    <li className="flex items-center gap-3.75 bg-purple-40 rounded-lg py-1 px-2"><Image src={Lightning} alt="Ligthning Icon" />Enhanced Leadership Skills</li>
                    <li className="flex items-center gap-3.75 bg-purple-40 rounded-lg py-1 px-2"><Image src={Lightning} alt="Ligthning Icon" />Improved Employee Engagement</li>
                    <li className="flex items-center gap-3.75 bg-purple-40 rounded-lg py-1 px-2"><Image src={Lightning} alt="Ligthning Icon" />Stronger Organisational Culture</li>
                    <li className="flex items-center gap-3.75 bg-purple-40 rounded-lg py-1 px-2"><Image src={Lightning} alt="Ligthning Icon" />Sustainable Growth</li>
                </ul>
            </div>           
        </div>
    </SectionLayout>
  )
}

export default Management
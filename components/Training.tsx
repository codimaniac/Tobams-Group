import SectionLayout from "./SectionLayout"
import TrainingCard from "./TrainingCard"
import CorporateTrainings from "@/assets/images/CorporateTrainings.jpg"
import IndividualTrainings from "@/assets/images/IndividualTraining.jpg"
import CapacityDevelopment from "@/assets/images/CapacityDevelopment.jpg"

const TrainingProgrammes = [
    {
        name: "Corporate Trainings ",
        description: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
        keypoints: [
            "Leadership Training",
            "Strategic Planning and Implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training",
        ],
        image: CorporateTrainings,
    },
    {
        name: "Personalised Individual Training",
        description: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.  ",
        keypoints: [
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development",
        ],
        image: IndividualTrainings,
    },
    {
        name: "Capacity Development",
        description: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
        keypoints: [
            "Tailored Training Programs",
            "Expert-Led Workshops",
            "Personalized Mentorship",
            "Technical Skills Enhancement",
            "Collaborative Learning Environment",
            "Ongoing Support and Resources",
        ],
        image: CapacityDevelopment,
    }
]

const Training = () => {
  return (
    <SectionLayout className="flex flex-col gap-30 py-26">
        {
            TrainingProgrammes.map((programme, index) => {
                const reverse = index % 2 !== 0 ? true : false
                return (
                    <TrainingCard key={index} name={programme.name} description={programme.description} keypoints={programme.keypoints} image={programme.image} reverseRow={reverse} />
                )
            })
        }
    </SectionLayout>
  )
}

export default Training
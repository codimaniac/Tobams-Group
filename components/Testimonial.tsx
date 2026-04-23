import SectionLayout from "./SectionLayout"
import TestimonialCard from "./TestimonialCard"
import Image1 from "@/assets/images/Image (1).png"
import Image2 from "@/assets/images/Image (2).png"
import Image3 from "@/assets/images/Image (3).png"
import Image4 from "@/assets/images/Image (4).png"
import ChevronLeft from "@/assets/icons/ChevronLeft.svg"
import ChevronRight from "@/assets/icons/ChevronRight.svg"
import Image from "next/image"
import Button from "./Button"

const testimonials = [
  {
    name: "Aisha Yusuf",
    position: "Founder, CraftHub NG",
    image: Image1,
    comment: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    position: "Marketing Manager, E-Commerce Emporium",
    image: Image2,
    comment: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    position: "HR Director, FutureTech Solutions",
    image: Image3,
    comment: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Rita Ahmed",
    position: "Creative Director, ArtInnovate Studios",
    image: Image4,
    comment: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
  },
  {
    name: "David Johnson",
    position: "Small Business Owner",
    image: Image2,
    comment: "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
  },
  {
    name: "Femi Adekunle",
    position: "IT Professional",
    image: Image1,
    comment: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
  },
]

const Testimonial = () => {
  return (
    <SectionLayout className="flex flex-col py-26 gap-2.5 bg-background">
        <h2 className="font-nunito font-bold text-center text-[40px] text-main-text leading-[130%]">Testimonials</h2>
        <div className="flex overflow-hidden">
            <div className="flex gap-6">
              {
                testimonials.map((testimonial, index) => {
                  return (
                    <TestimonialCard key={index} name={testimonial.name} position={testimonial.position} image={testimonial.image} comment={testimonial.comment} />
                  )
                })
              }
            </div>
        </div>
        <div className="flex gap-3 items-center self-end mt-7.5">
          <button className="flex items-center justify-center bg-[#f04354]/10 w-8 h-8 rounded-lg">
            <Image src={ChevronLeft} alt="Chevron Left Icon" />
          </button>
          <button className="flex items-center justify-center bg-[#f04354]/10 w-8 h-8 rounded-lg">
            <Image src={ChevronRight} alt="Chevron Left Icon" />
          </button>
        </div>
    </SectionLayout>
  )
}

export default Testimonial
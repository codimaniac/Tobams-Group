import Image, { StaticImageData } from "next/image"

interface TestimonialCardProps {
  name: string;
  position: string;
  image: StaticImageData;
  comment: string;
}

const TestimonialCard = ({name, position, image, comment}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-5 rounded-2xl border-l-2 border-secondary bg-white w-105.5 h-61">
      <div className="flex gap-2">
        <div className="relative w-11 aspect-square overflow-hidden rounded-full">
            <Image src={image} alt="Learning Platform" fill className="object-cover w-11 h-11" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-main-text">{name}</span>
          <span className="text-subdued text-sm">{position}</span>
        </div>
      </div>
      <p className="text-main-text leading-[150%]">{comment}</p>
    </div>
  )
}

export default TestimonialCard
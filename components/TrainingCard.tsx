import Image, { StaticImageData } from "next/image"
import LightningSolid from "@/assets/icons/LightningSolid.svg"

interface TrainingCardProps {
        name: string;
        description: string;
        keypoints: string[];
        image: StaticImageData;
        reverseRow: boolean;
    }

const TrainingCard = ({name, description, keypoints, image, reverseRow}: TrainingCardProps) => {
  return (
    <div className={`flex ${reverseRow ? "flex-row-reverse" : ""} gap-16 items-center`}>
        <div className="flex flex-col flex-1 gap-5">
            <h2 className="font-nunito font-semibold text-[40px] text-main-text">{name}</h2>
            <div className="flex flex-col gap-5 text-main-text leading-[150%]">
                <p>{description}</p>
                <ul className="flex flex-col gap-1.5">
                    {
                        keypoints.map((keypoint, index) => {
                            return (
                                <li key={index} className="flex items-center gap-1.5"><Image src={LightningSolid} alt="Ligthning Icon" />{keypoint}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="relative flex-1 aspect-square overflow-hidden h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl">
            <Image src={image} alt="A team undergoing training" fill className="object-cover" />
        </div>
    </div>
  )
}

export default TrainingCard
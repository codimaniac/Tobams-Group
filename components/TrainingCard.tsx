import Image, { StaticImageData } from "next/image"
import LightningSolid from "@/assets/icons/LightningSolid.svg"

interface TrainingCardProps {
        name: string;
        description: string;
        keypoints: string[];
        image: StaticImageData;
        reverseRow: boolean;
        alt: string;
    }

const TrainingCard = ({name, description, keypoints, image, reverseRow, alt}: TrainingCardProps) => {
  return (
    <div className={`flex ${reverseRow ? "xl:flex-row-reverse" : ""} flex-col xl:flex-row gap-16 items-center`}>
        <div className="flex flex-col flex-1 gap-5">
            <h2 className="font-nunito font-semibold  text-[clamp(20px,2.8vw,40px)] text-main-text">{name}</h2>
            <div className="xl:hidden relative not-xl:max-h-[60vw] not-xl:w-full not-xl:min-w-81.75 flex-1 aspect-square overflow-hidden h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl">
                <Image src={image} alt={alt} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5 text-main-text leading-[150%]">
                <p>{description}</p>
                <ul className="flex flex-col gap-1.5">
                    {
                        keypoints.map((keypoint, index) => {
                            return (
                                <li key={index} className="flex items-center gap-1.5"><Image src={LightningSolid} alt="Lightning icon" />{keypoint}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="not-xl:hidden relative not-xl:w-full not-xl:min-w-81.75 flex-1 aspect-square overflow-hidden h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl">
            <Image src={image} alt={alt} fill className="object-cover" />
        </div>
    </div>
  )
}

export default TrainingCard
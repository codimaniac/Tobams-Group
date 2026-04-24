import Image from "next/image";

interface SocialLinksProps {
    icon: string;
    alt: string;
}

const SocialLinks = ({ icon, alt }: SocialLinksProps) => {
  return (
    <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10">
        <Image src={icon} alt={alt} className="w-5 h-auto" />
    </div>
  )
}

export default SocialLinks
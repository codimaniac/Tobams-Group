import Image from "next/image";

interface ContactInfoProps {
    info: string;
    icon: string;
    alt: string;
}

const ContactInfo = ({ info, icon, alt }: ContactInfoProps) => {
  return (
    <p className="flex items-center gap-2 leading-[150%]">
        <Image src={icon} alt={alt} />
        {info}
    </p>
  )
}

export default ContactInfo
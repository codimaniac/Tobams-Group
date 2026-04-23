import Image from "next/image";

interface ContactInfoProps {
    info: string;
    icon: string;
}

const ContactInfo = ({ info, icon }: ContactInfoProps) => {
  return (
    <p className="flex items-center gap-2 leading-[150%]">
        <Image src={icon} alt="Mail Icon" />
        {info}
    </p>
  )
}

export default ContactInfo
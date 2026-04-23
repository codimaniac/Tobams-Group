import Image from "next/image";
import Chevron from "@/assets/icons/Chevron.svg"

interface NavMenuItemProps {
    children: React.ReactNode;
    hideDropDown?: boolean;
    className?: string;
}

const NavMenuItem = ({children, hideDropDown = false, className}: NavMenuItemProps) => {
  return (
    <div className={`flex items-center gap-1 text-main-text ${className}`}>
        <span className="px-2 py-4">{children}</span>
        {!hideDropDown && <Image src={Chevron} alt="Cheron Down Icon" />}
    </div>
  )
}

export default NavMenuItem
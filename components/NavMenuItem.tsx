"use client"

import Image from "next/image";
import Chevron from "@/assets/icons/Chevron.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuItemProps {
    children: React.ReactNode;
    href: string;
    hideDropDown?: boolean;
    className?: string;
}

const NavMenuItem = ({children, href, hideDropDown = false, className}: NavMenuItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <div className={`flex items-center gap-1 text-main-text pb-0.5 ${isActive ? "xl:border-b" : ""} border-primary ${className}`}>
        <Link href={href}>{children}</Link>
        {!hideDropDown && <Image src={Chevron} alt="Chevron down icon" />}
    </div>
  )
}

export default NavMenuItem
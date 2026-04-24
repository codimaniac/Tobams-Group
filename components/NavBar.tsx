"use client"

import Image from "next/image"
import Logo from "@/assets/icons/CompanyLogo.svg"
import Account from "@/assets/icons/Account.svg"
import ChevronAlt from "@/assets/icons/ChevronAlt.svg"
import Menu from "@/assets/icons/Menu.svg"
import Button from "./Button"
import NavMenuItem from "./NavMenuItem"
import { useState } from "react"

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <nav className="flex flex-col bg-white">
        <div className="flex items-center justify-between px-6 md:px-16 py-7 border-b border-purple-10">
            <Image src={Logo} alt="Company's Logo" className="h-16 w-auto" />
            <div className="flex items-center justify-center gap-6 text-white">
                <Button className="bg-transparent p-0! xl:hidden" onClick={() => setIsNavOpen(!isNavOpen)}><Image src={Menu} alt="Menu Icon" /></Button>
                <Button className="not-xl:hidden">
                    <div className="flex items-center justify-center bg-purple-10 rounded-full w-8 h-8"><Image src={Account} alt="Sign Up / Sign In" className="w-3 h-auto" /></div>
                    <div className="flex items-center justify-center gap-2"><span>Account</span><Image src={ChevronAlt} alt="Chevron Down Icon"/></div>
                </Button>
                <Button className="bg-secondary! not-xl:hidden">Take Assessment</Button>
            </div>
        </div>
        <div className={`flex xl:justify-center px-6 md:px-16 py-5 ${!isNavOpen ? "hidden" : ""}`}>
            <div className="flex flex-col xl:flex-row gap-8">
                <NavMenuItem href="/">About</NavMenuItem>
                <NavMenuItem href="/what-we-do">What We Do</NavMenuItem>
                <NavMenuItem href="/jobs">Jobs</NavMenuItem>
                <NavMenuItem href="/projects" hideDropDown>Projects</NavMenuItem>
                <NavMenuItem href="/academy" hideDropDown>TG Academy</NavMenuItem>
                <NavMenuItem href="/partnership" hideDropDown>Strategic Patnership</NavMenuItem>
                <NavMenuItem href="/pricing" hideDropDown>Pricing</NavMenuItem>
                <NavMenuItem href="/consultation" hideDropDown>Book a Consultation</NavMenuItem>                
            </div>
        </div>
    </nav>
  )
}

export default NavBar
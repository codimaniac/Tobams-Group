"use client"

import Image from "next/image"
import Logo from "@/assets/icons/CompanyLogo.svg"
import Account from "@/assets/icons/Account.svg"
import ChevronAlt from "@/assets/icons/ChevronAlt.svg"
import Menu from "@/assets/icons/Menu.svg"
import Button from "./Button"
import { useState } from "react"
import NavMenu from "./NavMenu"

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <nav className="flex flex-col bg-white">
        <div className="flex items-center justify-between px-6 md:px-16 py-7 border-b border-purple-10">
            <Image src={Logo} alt="Tobams Group logo" className="h-16 w-auto" />
            <div className="flex items-center justify-center gap-6 text-white">
                <Button className="bg-transparent p-0! xl:hidden" onClick={() => setIsNavOpen(!isNavOpen)}><Image src={Menu} alt="Navigation menu icon" /></Button>
                <Button className="not-xl:hidden">
                    <div className="flex items-center justify-center bg-purple-10 rounded-full w-8 h-8"><Image src={Account} alt="Sign Up / Sign In" className="w-3 h-auto" /></div>
                    <div className="flex items-center justify-center gap-2"><span>Account</span><Image src={ChevronAlt} alt="Dropdown arrow icon"/></div>
                </Button>
                <Button className="bg-secondary! not-xl:hidden">Take Assessment</Button>
            </div>
        </div>
        {/* Large Screen Nav Menu */}
        <div className={`hidden xl:flex xl:justify-center px-6 md:px-16 py-5`}>
            <NavMenu />
        </div>
        {/* Mobile and Medium Screen Nav Menu */}
        <div className={`xl:hidden xl:justify-center px-6 md:px-16 py-5 ${isNavOpen ? "flex" : "hidden"}`}>
            <NavMenu />
        </div>
    </nav>
  )
}

export default NavBar
import Image from "next/image"
import Logo from "@/assets/icons/CompanyLogo.svg"
import Account from "@/assets/icons/Account.svg"
import ChevronAlt from "@/assets/icons/ChevronAlt.svg"
import Button from "./Button"
import NavMenuItem from "./NavMenuItem"

const NavBar = () => {
  return (
    <nav className="flex flex-col bg-white">
        <div className="flex items-center justify-between px-16 py-7 border-b border-purple-10">
            <Image src={Logo} alt="Company's Logo" className="h-16 w-auto" />
            <div className="flex items-center justify-center gap-6 text-white">
                <Button>
                    <div className="flex items-center justify-center bg-purple-10 rounded-full w-8 h-8"><Image src={Account} alt="Sign Up / Sign In" className="w-3 h-auto" /></div>
                    <div className="flex items-center justify-center gap-2"><span>Account</span><Image src={ChevronAlt} alt="Chevron Down Icon"/></div>
                </Button>
                <Button className="bg-secondary!">Take Assessment</Button>
            </div>
        </div>
        <div className="flex justify-center px-16 py-5">
            <div className="flex gap-8">
                <NavMenuItem>About</NavMenuItem>
                <NavMenuItem>What We Do</NavMenuItem>
                <NavMenuItem>Jobs</NavMenuItem>
                <NavMenuItem hideDropDown>Projects</NavMenuItem>
                <NavMenuItem hideDropDown>TG Academy</NavMenuItem>
                <NavMenuItem hideDropDown>Strategic Patnership</NavMenuItem>
                <NavMenuItem hideDropDown>Pricing</NavMenuItem>
                <NavMenuItem hideDropDown>Book a Consultation</NavMenuItem>                
            </div>
        </div>
    </nav>
  )
}

export default NavBar
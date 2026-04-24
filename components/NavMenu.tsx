import NavMenuItem from "./NavMenuItem"

const NavMenu = () => {
  return (
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
  )
}

export default NavMenu
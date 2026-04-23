import Image from "next/image"
import Button from "./Button"
import Logo from "@/assets/icons/CompanyLogo.svg"
import LinkedInIcon from "@/assets/icons/LinkedIn.svg"
import TwitterIcon from "@/assets/icons/Twitter.svg"
import InstagramIcon from "@/assets/icons/Instagram.svg"

const Footer = () => {
  return (
    <footer className="flex flex-col text-white">
        <div className="flex justify-between items-center px-16 py-10 bg-purple-90">
            <div className="flex flex-col gap-8">
              <span className="font-normal">Ready to be a part of something extraordinary?</span>
              <h2 className="text-[32px] font-semibold font-nunito">Let’s work together to create a difference</h2>
            </div>
            <Button>
              Get In Touch
            </Button>
        </div>
        <div className="flex flex-col justify-center px-16 pt-13 pb-8 bg-purple-100">
            <div className="flex flex-wrap justify-between gap-10 w-full max-w-7xl text-[16px]">
              <div className="flex flex-col gap-6 max-w-80">
                <Image src={Logo} alt="Company's Logo" />
                <p className="leading-[150%]">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
                <div className="flex gap-5">
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={LinkedInIcon} alt="LinkedIn Icon" className="w-5 h-auto" /></div>
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={TwitterIcon} alt="Twitter Icon" className="w-5 h-auto" /></div>
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={InstagramIcon} alt="Instagram Icon" className="w-5 h-auto" /></div>
                </div>
              </div>
              <div className="flex flex-col gap-6 max-w-75">
                <h3 className="text-xl font-bold">What We Do</h3>
                <ul className="flex flex-col gap-10 list-none">
                  <li>Sustainability Services</li>
                  <li>Strategy Planning and Implementation</li>
                  <li>Tech Talent Solutions</li>
                  <li>Training and Development</li>
                  <li>IT Consulting Services</li>
                  <li>Social Impact</li>
                  <li>Talent Recruitment</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 max-w-30">
                <h3 className="text-xl font-bold">Company</h3>
                <ul className="flex flex-col gap-10 list-none">
                  <li>About</li>
                  <li>Jobs</li>
                  <li>Projects</li>
                  <li>Our Founder</li>
                  <li>Business Model</li>
                  <li>The Team</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                  <li>FAQs</li>
                  <li>Testimonials</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 max-w-60">
                <h3 className="text-xl font-bold">Solution</h3>
                <ul className="flex flex-col gap-10 list-none">
                  <li>Blog</li>
                  <li>Case Studies</li>
                  <li>Whitepapers</li>
                </ul>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex bg-white-transparent w-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Registered Offices</h3>
                </div>
              </div>
            </div>
            <div className="flex"></div>
        </div>
    </footer>
  )
}

export default Footer
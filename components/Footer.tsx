import Image from "next/image"
import Button from "./Button"
import Logo from "@/assets/icons/CompanyLogo.svg"
import LinkedInIcon from "@/assets/icons/LinkedIn.svg"
import TwitterIcon from "@/assets/icons/Twitter.svg"
import InstagramIcon from "@/assets/icons/Instagram.svg"
import MailIcon from '@/assets/icons/Mail.svg';
import PhoneIcon from '@/assets/icons/Phone.svg';
import ContactInfo from "./ContactInfo"

const Footer = () => {
  return (
    <footer className="flex flex-col text-white font-nunito">
        <div className="flex justify-between items-center px-16 py-10 bg-purple-90">
            <div className="flex flex-col gap-2.5">
              <span className="font-normal">Ready to be a part of something extraordinary?</span>
              <h2 className="text-[32px] font-semibold font-nunito">Let’s work together to create a difference</h2>
            </div>
            <Button>
              Get In Touch
            </Button>
        </div>
        <div className="flex flex-col gap-5 justify-center px-16 pt-13 pb-8 bg-purple-100">
            <div className="flex flex-wrap justify-between gap-10 w-full max-w-7xl text-[16px]">
              <div className="flex flex-col gap-3 max-w-80">
                <Image src={Logo} alt="Company's Logo" />
                <p className="leading-[150%]">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
                <div className="flex gap-5">
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={LinkedInIcon} alt="LinkedIn Icon" className="w-5 h-auto" /></div>
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={TwitterIcon} alt="Twitter Icon" className="w-5 h-auto" /></div>
                  <div className="flex items-center justify-center bg-purple-10 rounded-full w-10 h-10"><Image src={InstagramIcon} alt="Instagram Icon" className="w-5 h-auto" /></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-w-75">
                <h3 className="text-xl font-bold">What We Do</h3>
                <ul className="flex flex-col gap-3 list-none">
                  <li>Sustainability Services</li>
                  <li>Strategy Planning and Implementation</li>
                  <li>Tech Talent Solutions</li>
                  <li>Training and Development</li>
                  <li>IT Consulting Services</li>
                  <li>Social Impact</li>
                  <li>Talent Recruitment</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 max-w-30">
                <h3 className="text-xl font-bold">Company</h3>
                <ul className="flex flex-col gap-3 list-none">
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
              <div className="flex flex-col gap-3 max-w-60">
                <h3 className="text-xl font-bold">Solution</h3>
                <ul className="flex flex-col gap-3 list-none">
                  <li>Tobams Group Academy</li>
                  <li>Help a Tech Talent</li>
                  <li>Campus Ambassadors Program</li>
                  <li>Join Our Platform</li>
                  <li>Pricing</li>
                  <li>Book a Consultation</li>
                  <li>Join Our Slack Community</li>
                </ul>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex bg-white-transparent w-full p-6">
                <div className="flex flex-col flex-9 gap-2.5">
                  <h3 className="text-xl font-bold">Registered Offices</h3>
                  <div className="flex gap-6">
                    <div className="flex flex-col flex-1 gap-2.5 pr-6">
                      <h4 className="text-secondary">United Kingdom</h4>
                      <p className="leading-[150%]">
                        07451196 (Registered by Company House) <br /> Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 gap-2.5 border-l border-purple-10/12 pl-6">
                      <h4 className="text-secondary">Nigeria</h4>
                      <p className="leading-[150%]">
                        RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwar-Rimi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-3 gap-2.5">
                  <div className="flex flex-col flex-1 gap-3 border-l border-purple-10/12 pl-6 ">
                    <h3 className="text-xl font-bold mb-1">Contact Information</h3>
                    <ContactInfo info="theteam@tobamsgroup.com" icon={MailIcon} />                    
                    <ContactInfo info="+447886600748" icon={PhoneIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center font-light py-7 border-t border-purple-10/12">
              <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>
              <div className="flex gap-10 underline">
                <span className="cursor-pointer">Term and Condition</span>
                <span className="cursor-pointer">Privacy Policy</span>
                <span className="cursor-pointer">Cookies Policy</span>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
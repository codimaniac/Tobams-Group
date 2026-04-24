import Button from "./Button"
import SectionLayout from "./SectionLayout"

const CTA = () => {
  return (
    <SectionLayout className="flex justify-center bg-background">
        <div className="flex flex-col items-center justify-center bg-primary text-white py-8 px-6 md:px-16 w-full md:w-4/5 rounded-lg gap-8">
            <span className="md:text-xl font-semibold font-nunito leading-[150%] text-center tracking-[3%] w-9/10">Want to accelerate professional growth and development at your organisation? See how we can help.</span>
            <Button className="bg-white! text-primary w-fit">Book a Consultation</Button>
        </div>
    </SectionLayout>
  )
}

export default CTA
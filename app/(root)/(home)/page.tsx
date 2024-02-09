import HeroToggle from "@/components/HeroToggle"
import SectionHeading from "@/components/SectionHeading"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function MainPage() {
  return (
    <>
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row my-10">
        {/* left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach text-whiteModeText w-max rounded ">Hello There😊</p>
            <h1 className="text-whiteModeText dark:text-darkModeText">Sukuna welcomes you</h1>
            <p className="text-whiteModeText dark:text-darkModeText">Domain Expansion Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, fugiat! Doloribus hic necessitatibus minima. Recusandae quibusdam optio reprehenderit, autem nobis, eveniet ipsum ratione, quod at expedita id molestias repellendus soluta.</p>
          </div>
          <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
            <Link 
            className="btn btn-primary"
            href={"/contact"}>
              <Phone/>
              Contact now
            </Link>
            <Link 
            className="btn btn dark:text-darkModeText"
            href={"/contact"}>
              <Phone/>
              View Portfolio
              <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className=" relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-2xl overflow-hidden transition-all duration-100 ease-in-out">
          <HeroToggle/>
        </div>
      </section>
      {/* skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title={"Creative Skills"}
          subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas tempora quaerat, ipsum, eaque sapiente vel ut est quasi perspiciatis iusto nulla enim veniam necessitatibus deleniti quibusdam obcaecati quod sint!"}
        />

      </section>
    </>

  )
}

export default MainPage
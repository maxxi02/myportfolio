import HeroToggle from "@/components/HeroToggle"
import PortfolioItem from "@/components/PortfolioItem"
import SectionHeading from "@/components/SectionHeading"
import { benefits, portfolios, skills } from "@/constants"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function MainPage() {
  return (
    <>
      {/* hero section */}
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
        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="box dark:bg-transparent dark:drop-shadow-xl shadow shadow-white flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded drop-shadow-md dark:shadow dark:shadow-white shadow-black flex items-center justify-center flex-shrink-0 mb-2">
                <Image 
                src={skill.icon} 
                width={35} 
                height={35} 
                alt={skill.name}/>
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 dark:text-darkModeText mb-2">{skill.name}</h4>
                <p className="text-grey-600 dark:text-softDarkModeText">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* benifits section */}
      <section className="max-width section-padding">
        <SectionHeading title="Benefits" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas tempora quaerat, ipsum, eaque sapiente vel ut est quasi perspiciatis iusto nulla enim veniam necessitatibus deleniti quibusdam obcaecati quod sint!"/>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-4 tablet:mb-6">
          {benefits.slice(0,2).map((benefit, i)=> (
            <div key={i} className="box dark:bg-transparent dark:drop-shadow-xl shadow-white shadow text-center">
              <h5 className="text-grey-700 dark:text-darkModeText mb-2">{benefit.name}</h5>
              <p className="text-grey-600 dark:text-softDarkModeText">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {benefits.slice(2).map((benefit, i)=> (
            <div key={i} className="box dark:bg-transparent dark:drop-shadow-xl shadow-white shadow text-center">
              <h5 className="text-grey-700 dark:text-darkModeText mb-2">{benefit.name}</h5>
              <p className="text-grey-600 dark:text-softDarkModeText">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding max-width">
      <SectionHeading
          title={"My Projects"}
          subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas tempora quaerat, ipsum, eaque sapiente vel ut est quasi perspiciatis iusto nulla enim veniam necessitatibus deleniti quibusdam obcaecati quod sint!"}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.slice(0,3).map((p, i) => (
            <PortfolioItem key={i} portfolio={p}/>
          ))}
        </div>
      </section>
    </>

  )
}

export default MainPage
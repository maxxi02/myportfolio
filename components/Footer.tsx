import { contactDetails, navLinks, socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='py-10 border-t border-peach max-width'>
      <div className='flex items-center justify-between'>
        <Link
        className='text-orange text-xl font-semibold' 
        href={"/"}>
          Sukuna
        </Link>
        {/* <nav className='flex gap-12 max-tablet:hidden'>
          <ul className='flex items-center gap-8'>
            {
              navLinks.map((link, index)=>(
                <li 
                  key={index}>
                    <NavLink href={link.url} label={link.label} className='py-3 hover:text-orange transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left '/>
                </li>
              ))
            }
          </ul>
        </nav> */}
        {/* Contact Details*/}
        <div className='w-max dark:border-none border border-peach p-5 mx-auto flex flex-col tablet:flex-row  gap-5 table:gap-10 items-center rounded-lg mt-5'>
          {
            contactDetails.map((detail, i)=> (
              <div
              className='flex gap-3 items-center text-orange'
              key={i}>
                  <detail.icon size={20}/>
                  <p className='dark:bg-none dark:text-darkModeText text-whiteModeText'>{detail.text}</p>
              </div>
            ))
          }
        </div>
        <div className="flex gap-3">
          {
            socialLinks.map((link, i)=> (
              <a
                className='w-10 h-10 flex items-center justify-center rounded dark:bg-orange dark:text-darkModeText bg-orange  text-whiteModeText'
                key={i} 
                href={link.url}>
                <link.icon strokeWidth={0} fill='currentColor'/>
              </a>
            ))
          }
        </div>
      </div>
      <p className='mt-8 dark:text-darkModeText text-whiteModeText text-center text-sm'>© {new Date().getFullYear()} Sukuna. All right reserved</p>
    </footer>
  )
}

export default Footer
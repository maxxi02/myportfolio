import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import MobileMenu from './MobileMenu'
import { navLinks } from '@/constants';





function Header() {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-peach'>
      <Link href={"/"}>
        <h5 className='text-orange text-2xl font-semibold'>Sukuna</h5>
      </Link>
      <nav className='flex items-center gap-8 max-tablet:hidden'>
        {/* DarkMode Toggle */}
        <ThemeToggle/>
        {navLinks.map((item,i)=> 
              <NavLink
              key={i} 
              href={item.url} 
              label={item.label}/>
          )}
          <Link
          href={"/contact"} 
          className='btn btn-primary'>
            <IoChatbubbleEllipsesOutline className='text-[24px]'/>
            Contact me
          </Link>
      </nav>
      <MobileMenu/>
    </header>
  )
}

export default Header
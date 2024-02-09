"use client";
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import ThemeToggle from './ThemeToggle';
import { navLinks, socialLinks } from '@/constants';
import NavLink from './NavLink';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';



const getFromLocalStorage = () =>
  {
    if(typeof window !== undefined && typeof window !== 'undefined')
    {
      const value = localStorage.getItem('isOpen'); 
      return value || "true"; 
    }
    return "true";
  }

function MobileMenu() {


  const [isOpen, setIsOpen] = useState(()=>getFromLocalStorage());
  
  useEffect(() => {
    
    if(typeof window !== undefined && typeof window !== 'undefined')
    {
      localStorage.setItem('isOpen', isOpen);
    }
    
  }, [isOpen]);
  
  const toggleMenu = () => setIsOpen((prev)=> prev === "true" ? "false" : "true") ;

  return (
    <div className='tablet:hidden'>
      <button onClick={toggleMenu} className="dark:text-[whitesmoke] text-grey-700 hover:text-orange transition-colors">
        <CiMenuFries size={18} />
      </button>
      {/* SIDE BAR*/}
      <div className={`w-full h-full flex flex-col dark:bg-darkModeBg dark:text-darkModeText bg-whiteModeBg fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
        ${
          isOpen === "true" ? "translate-y-0" : "-translate-y-full"
        }
        `}>
        <div className='flex w-full items-center justify-between h-20 max-width border-b border-peach dark:border-none'>
          <Link href={"/"}>
            <h5 className='text-orange text-2xl font-semibold'>Sukuna</h5>
          </Link>
          <button
          onClick={toggleMenu} 
          className="dark:text-[whitesmoke] text-grey-700 hover:text-orange transition-colors">
            <X/>
          </button>
        </div>

        <nav className='flex flex-col items-center justify-center flex-1 gap-5 '>
          {/* DarkMode Toggle */}
          <ThemeToggle/>
          {navLinks.map((item,i)=> 
                <NavLink
                key={i} 
                href={item.url} 
                label={item.label}
                className='text-2xl'
                />
            )}
            <Link
            href={"/contact"} 
            className='btn btn-primary'>
              <IoChatbubbleEllipsesOutline className='text-[24px]'/>
              Contact me
            </Link>
        </nav>
        <div className="w-full h-20 flex items-center justify-center gap-10 max-width dark:border-none border-t border-peach">
            {
              socialLinks.map((link, i)=>
              (
                <a
                className='dark:text-darkModeText dark:hover:text-orange text-gray-700 hover:text-orange transition-colors' 
                href={link.url} 
                key={i}>
                <link.icon fill='currentColor' strokeWidth={0}/>
                </a>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
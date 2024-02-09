'use client';

import { MyContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

function HeroToggle() {

    const contextValue = useContext(MyContext);
    if(!contextValue) return null;
    const {theme} = contextValue;

  return (
    <>
        {theme === "dark" ? 
        <Image 
        src={"/images/RyomenSukuna.jpg"} 
        alt="hero" 
        fill 
        className="object-cover " /> :
        <Image 
          src={"/images/Yuji.jpg"} 
          alt="hero" 
          fill 
          className="object-cover " />
        }
    </>
  )
}

export default HeroToggle
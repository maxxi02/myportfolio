"use client";
import { portfolios } from '@/constants'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'


type PortfolioType = 
{
    portfolio: (typeof portfolios)[0],
}

function PortfolioItem(
    {portfolio} : PortfolioType
) {
    const [currentImage, setCurrentImage] = useState(portfolio.images[0]);
  return (
    <div className='p-8 '>
        <h4 className='mb-2'>{portfolio.title}</h4>
        <div className="relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5">
            <Image 
            src={currentImage} 
            alt={portfolio.title} 
            className='object-cover'
            fill 
            />
        <div className="bg-black bg-opacity-10 backdrop-blur-[1px absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange border border-peach-400 p-3 text-grey rounded-lg">
                <ArrowUpRight />
            </div>
        </div>
        </div>
    </div>
  )
}

export default PortfolioItem
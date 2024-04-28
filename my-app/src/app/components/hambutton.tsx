"use client"
import React from 'react'
import { useState } from 'react'
import { Heebo } from 'next/font/google';

export const heebo = Heebo({ weight: '400', subsets: ['latin']});
const HamButton = ({ display }: {
  display: { question: string, answer: string }[]
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      <button onClick={toggleSidebar} className="absolute top-[1.25rem] left-[1.5rem] z-10">
      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      </button>
        <div className={`bg-[#e8b7a0] fixed flex justify-center top-0 left-[-8rem] h-full w-[16rem] bg-white transform transition-transform ${isOpen ? 'translate-x-[8rem]' : '-translate-x-[10rem]'}`}>
          <div className='flex flex-col text-black mt-[5rem] w-[11rem]'>
            {
              display.map((d, index) => {
                const { question, answer } = d
                return (
                  <div key={index + ""} className='flex flex-col'>
                    <p className="text-lg text-[#ce6a6b] font-bold font-sertif">{index+1}. {question}</p>
                    <p className="text-sm text-[#ce6a6b] ml-4 mb-2 font-bold font-sertif">-{answer}</p>
                  </div>
                )
              })
            }
          </div>
        <div className="p-4"></div>
      </div>
      </>
    );
}

export default HamButton;

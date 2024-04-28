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
      <button onClick={toggleSidebar} className="absolute top-[1.25rem] left-[1.5rem] z-50">
      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      </button>
        <div className={`bg-white fixed flex justify-center top-0 left-[-8rem] h-full w-[16rem] transform transition-transform ${isOpen ? 'translate-x-[8rem]' : '-translate-x-[10rem]'}`}>
          <div className='flex flex-col text-black mt-[5rem] w-[11rem]'>
            {
              display.map((d, index) => {
                const { question, answer } = d
                return (
                  <div key={index + ""} className='flex flex-col'>
                    <p className="text-lg text-[#123C69] font-bold font-serif truncate">{index+1}. {question}</p>
                    <p className="ml-[1.5rem] text-sm text-[#AC3B61] ml-4 mb-2 font-black">{answer}</p>
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

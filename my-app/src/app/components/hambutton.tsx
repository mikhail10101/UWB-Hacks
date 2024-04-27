"use client"
import React from 'react'
import { useState } from 'react'

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
        <div className={`fixed flex justify-center top-0 left-[-8rem] h-full w-[16rem] bg-white transform transition-transform ${isOpen ? 'translate-x-[8rem]' : '-translate-x-[10rem]'}`}>
          <div className='flex flex-col text-black mt-[4rem] w-[10rem]'>
            {
              display.map((d, index) => {
                const { question, answer } = d
                return (
                  <div key={index + ""} className='flex flex-col'>
                    <p>Q{index+1}: {question}</p>
                    <p>A{index+1}: {answer}</p>
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

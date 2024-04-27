"use client"
import React from 'react'
import { useState } from 'react'


const HamButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`fixed top-0 left-[10rem] h-full w-64 bg-white z-10 transform transition-transform ${isOpen ? 'translate-x-[6rem]' : '-translate-x-[10rem]'}`}>
        <button onClick={toggleSidebar} className="absolute top-[2rem] left-[2rem]">
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="p-4">Sidebar Content</div>
      </div>
    );
}

export default HamButton;

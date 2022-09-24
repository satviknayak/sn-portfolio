import React from 'react'

export default function Navbar() {
  return (
    <div className='flex absolute top-0 left-0 bg-none h-[4rem] sm:h-[5rem] w-full justify-between px-[1rem] sm:px-[4rem] z-[99]'>
        <div/>
        <ul className='flex my-auto'>
          <li className='mx-[15px] sm:mx-[1.5rem]'><a href="#About" className='text-slate-400 hover:text-white focus:text-white text-[0.9rem] sm:text-[1.1rem]'>About</a></li>
          <li className='mx-[15px] sm:mx-[1.5rem]'><a href="#Skills" className='text-slate-400 hover:text-white focus:text-white text-[0.9rem] sm:text-[1.1rem]'>Skills</a></li>
          <li className='mx-[15px] sm:mx-[1.5rem]'><a href="#Projects" className='text-slate-400 hover:text-white focus:text-white text-[0.9rem] sm:text-[1.1rem]'>Projects</a></li>
          <li className='mx-[15px] sm:mx-[1.5rem]'><a href="#Contact" className='text-slate-400 hover:text-white focus:text-white text-[0.9rem] sm:text-[1.1rem]'>Contact</a></li>
        </ul>
    </div>
  )
}

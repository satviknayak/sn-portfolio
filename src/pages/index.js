import React from "react"
import '../styles/global.css'
import * as Icon from 'react-bootstrap-icons'
import Navbar from '../components/Navbar'
import Footer  from '../components/Footer'
import Project from '../components/Project'
import Skill from '../components/Skill'

export default function Home() {
  return <div className="relative">
    <title>Satvik S Nayak</title>
    <div className="flex h-[55vh] sm:h-[85vh] w-full bg-img bg">
      <div className="absolute flex flex-col h-[55vh] sm:h-[85vh] left-[15px] sm:left-[75px]">
        <div className="absolute h-[18vh] sm:h-[30vh] flex w-[2px] bg-white left-[10px] sm:left-[15px]"></div>
        <div className="absolute bg-none text-white top-[19vh] sm:top-[31vh]"><a href="https://github.com/satviknayak"><Icon.Instagram className="text-[20px] sm:text-[30px]"/></a></div>
        <div className="absolute flex h-[2vh] w-[2px] bg-white top-[22vh] sm:top-[36vh] left-[10px] sm:left-[15px]"></div>
        <div className="absolute bg-none text-white top-[24.5vh] sm:top-[39vh]"><a href="https://www.linkedin.com/in/satvik-s-nayak-616b6121b/"><Icon.Linkedin className="text-[20px] sm:text-[30px]"/></a></div>
        <div className="absolute flex h-[2vh] w-[2px] bg-white left-[10px] top-[28vh] sm:top-[44vh] sm:left-[15px]"></div>
        <div className="absolute bg-none text-white top-[31vh] sm:top-[47vh]"><a href="https://github.com/satviknayak"><Icon.Github className="text-[20px] sm:text-[30px]"/></a></div>
        <div className="absolute h-[20vh] sm:h-[33vh] flex w-[2px] bg-white bottom-0 left-[10px] sm:left-[15px]"></div>
      </div>
      <div className="flex-col m-auto">
        <div className="mx-auto flex h-[100px] sm:h-[150px] w-[100px] sm:w-[150px] rounded-full bg-profile bg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-150"></div>
        <h1 className="mt-[30px] text-center text-white text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">Satvik S Nayak</h1>
      </div>
    </div>
    <div id="About" className="flex flex-col relative h-[85vh] w-full bg-black">
      <Navbar/>
      <h1 className="mt-[3.5rem] sm:mt-[4rem] text-[1.5rem] sm:text-[2rem] text-center text-white">About</h1>
    </div>
    <div id="Skills" className="flex flex-col relative w-full bg-black ">
      <Navbar/>
      <h1 className="mt-[3.5rem] sm:mt-[4rem] text-[1.5rem] sm:text-[2rem] text-center text-white">Skills</h1>
      <Skill />
    </div>
    <div id="Projects" className="flex flex-col relative w-full bg-black">
      <Navbar/>
      <h1 className="mt-[3.5rem] sm:mt-[4rem] text-[1.5rem] sm:text-[2rem] text-center text-white">Projects</h1>
      <Project></Project>
    </div>
    <div id="Contact" className="flex flex-col relative h-[85vh] w-full bg-black">
      <Navbar/>
      <h1 className="mt-[3.5rem] sm:mt-[4rem] text-[1.5rem] sm:text-[2rem] text-center text-white">Contact Me</h1>
    </div>
    <Footer/>
  </div>
}

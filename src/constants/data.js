import React from "react"
import { BiMoviePlay, BiBarChartSquare } from "react-icons/bi"
import { FaRecycle } from "react-icons/fa"
import {
  SiYourtraveldottv,
  SiCplusplus,
  SiPython,
  SiJava,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiGatsby,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si"

export const Projects = [
  {
    title: "SCL-2022-AlphaByte",
    type: "Website",
    desc: "SCL - Hackathon Project - UpCycle",
    icon: <FaRecycle />,
  },
  {
    title: "ProjectStatic",
    type: "Website",
    desc: "Movie review website",
    icon: <BiMoviePlay />,
  },
  {
    title: "Next-Trek",
    type: "Website",
    desc: "Travel Blog Website",
    icon: <SiYourtraveldottv />,
  },
  {
    title: "Portfolio",
    type: "Website",
    desc: "Portfolio",
    icon: <BiBarChartSquare />,
  },
]

export const Skills = [
  {
    title: "Languages",
    skills: [
      {name: "C++", icon: <SiCplusplus />},
      {name: "Python", icon: <SiPython />},
      {name: "Java", icon: <SiJava />},
      {name: "JavaScript", icon: <SiJavascript />},
      {name: "HTML", icon: <SiHtml5 />},
      {name: "CSS", icon: <SiCss3 />},
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
{ name: "Next.js", icon: <SiNextdotjs /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
{ name: "React", icon: <SiReact /> },
{ name: "Bootstrap", icon: <SiBootstrap /> },
{ name: "Django", icon: <SiDjango /> },
{ name: "Prisma", icon: <SiPrisma /> },
{ name: "PostgreSQL", icon: <SiPostgresql /> },
{ name: "Gatsby", icon: <SiGatsby /> },
{ name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      {name: "Git", icon: <SiGit />},
      {name: "GitHub", icon: <SiGithub />},
      {name: "Canva", icon: <SiCanva />},
      {name: "Illustrator", icon: <SiAdobeillustrator />},
      {name: "Photoshop", icon: <SiAdobephotoshop />},
    ],
  },
]

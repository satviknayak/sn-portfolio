import React from "react"
import { BiMoviePlay, BiBarChartSquare } from "react-icons/bi"
import { FaRecycle } from "react-icons/fa"
import { SiYourtraveldottv } from "react-icons/si"

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

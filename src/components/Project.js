import React from "react"
import { Projects } from "../constants/data"

export default function Project() {
  return (
    <div className="p-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {Projects.map((project, index) => (
        <a
          key={index}
          href={`https://github.com/satviknayak/${project.title}`}
          className="block p-10 border border-gray-500 shadow-xl transition rounded-xl hover:shadow-gray-500/10 hover:border-gray-300 duration-300 text-white text-5xl transition duration-500 hover:scale-[1.02]"
        >
          {project.icon}
          <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            {project.type}
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            {project.desc}
          </p>
        </a>
      ))}
    </div>
  )
}

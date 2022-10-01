import React from "react"
import { Skills } from "../constants/data"

export default function Skill() {
  return (
    <section className="m-4 md:m-8 dark:bg-black dark:text-white">
      {Skills.map((skill, index) => (
      <>
      <div key={index} className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-3xl font-bold">{skill.title}</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skill.skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded-xl">
          <div className="text-5xl">{skill.icon}</div>
          <h3 className="my-3 text-2xl font-semibold">{skill.name}</h3>
        </div>
        ))}
        </div>
        </>
        ))}
    </section>
  )
}

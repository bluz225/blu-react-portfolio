import { React, useEffect } from 'react'
import projectsData from '../../data/projectsData'
import { useId } from 'react'

export default function Projects({ setCurrentNav }) {
  const projectId = useId()

  useEffect(() => {
    setCurrentNav("projects")
  })

  const projectsMap = projectsData.map((project, idx) => {
    return (
      <>
        <div
          key={`${projectId}${idx}`}
          className='w-[350px] relative group py-0 group-hover:bg-red-900'
        >

          <div
            className='absolute object-fill z-[20] bg-white'
          >
          </div>
          {/* project 1: Gun Shapes Project */}

            <img
              className={`object-fit`}
              src={project.imgUrl}
              alt={project.imgAlt}
            />

          <div
            className={`opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            <h1
              className={`text-slate-100`}
            >./{project.groupSize}/{project.name}</h1>
            {/* <p>Gunbound-clone: Two players will spawn in their own turrets and take turns firing at each other. First one to hit the other wins. Be forewarned, this game is not as simple as it appears.</p> */}
            <p
              className={``}
            >
              <a
                className={`text-slate-100 hover:text-slate-100`}
                href={project.gitHubUrl}>GitHub</a>
            </p>
            <p
              className={``}
            >
              <a
                className={`text-slate-100 hover:text-slate-100`}
                href={project.deployedUrl}>Delpoyed</a>
            </p>
          </div>




        </div>
      </>
    )
  })


  return (
    <section
      className={`pt-[50px] h-fit`}
    >

      <h1
        className='text-center'
      >Projects</h1>
      <div
        className='flex flex-col items-center'
      >
        {projectsMap}
      </div>


    </section>
  )
}

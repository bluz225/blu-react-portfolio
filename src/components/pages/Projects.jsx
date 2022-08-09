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
          className='w-[350px] relative group my-5 md:w-[600px] md:m-5 group-hover:bg-red-900'
        >

          <div
            className='absolute object-fill z-[20] bg-white'
          >
          </div>

          <img
            className={`object-cover place-self-center`}
            src={project.imgUrl}
            alt={project.imgAlt}
          />

          <div
            className={`opacity-0 group-hover:opacity-100 bg-black/50 h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            <div
            className='flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'
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
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  >GitHub</a>
              </p>
              <p
                className={``}
              >
                <a
                  className={`text-slate-100 hover:text-slate-100`}
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Delpoyed</a>
              </p>
            </div>
          </div>
        </div>
      </>
    )
  })


  return (
    <section
      className={`pt-[50px] h-[90vh] overflow-auto`}
    >
      <div
        className='flex justify-center mt-10'
      >
        <div
          className='grid grid-cols-1 justify-items-center md:grid-cols-2'
        >
          {projectsMap}
        </div>
      </div>


    </section>
  )
}

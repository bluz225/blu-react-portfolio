import { React, useEffect } from 'react'
import { useId } from 'react'

export default function HomePage({setCurrentNav}) {
    const nameString = "<>BillyLu</>"
    const interestsArr = ["Anime", "Games", "Music-Festivals", "IPAs"]
    let interestId = useId()

    useEffect(()=>{
        setCurrentNav("home")
      })

    const interestsMap = interestsArr.map((interest, idx) => {
        return (
            <>
                <li
                    key={`${interestId}-${idx}`}
                    className="text-[1rem]"
                >{`<${interest}/>`}</li>
            </>
        )
    })

    return (
        <>
            <div
                className={`flex flex-col mb-auto pt-[30px] h-[90vh]`}
            >
                <div
                    className={`flex flex-row justify-center items-center my-5`}
                >
                    {/* Profile Image Container */}
                    <div
                        className='mx-5'
                    >
                        <img
                            className='border rounded-full object-cover h-[10rem] w-[10rem]'
                            src="https://i.imgur.com/MaI3re8.jpg"
                            alt="Billy Lu"
                        />
                    </div>

                    {/* Name Div Container */}
                    <div
                        className='flex flex-col justify-center mb-auto'
                    >
                        <p
                            className="text-blue-700 text-[1rem]"
                        >
                            {nameString}
                        </p>
                        <ul>
                            {interestsMap}
                        </ul>
                    </div>
                </div>

                {/* Quick Self Intro Section */}
                <div
                    className='flex justify-center my-5'
                >
                    <div
                        className='flex flex-col h-[3rem] w-[15rem]'
                    >
                        <h2
                        className='my-5'
                        >Who Am I?</h2>
                        <h3>Hi I'm Billy, I am an engineer from Southern California who likes making useful applications and interesting challenges</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

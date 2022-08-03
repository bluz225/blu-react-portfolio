import React from 'react'

export default function HomePage({bgColor}) {
    
    console.log(bgColor)
    const nameString = "<>BillyLu</>"
    const interestsArr = ["Anime", "Games", "Music-Festivals", "IPAs"]
    const interestsMap = interestsArr.map((interest,idx) => {
        return (
            <>
                <li
                key={`interests${idx}`}
                className="text-[1rem]"
                >{`<${interest}/>`}</li>
            </>
        )
    })

    return (
        <>
            <div
            >
            {/* Home Page Container */}
            <section
                className={`flex flex-col items-center justify-center`}
            >
                <div
                    className={`flex flex-row justify-center items-center`}
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
                        className='flex flex-col justify-center'
                    >
                        <p
                            className="text-blue-500 text-[1rem]"
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
                    className='flex justify-center'
                >
                    <div
                        className='flex flex-col h-[3rem] w-[15rem]'
                    >
                        <h2>Who Am I?</h2>
                        <h3>Hi I'm Billy, I am an engineer from Southern California who likes making useful applications and interesting challenges</h3>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

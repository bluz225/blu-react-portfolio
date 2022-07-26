import React from 'react'

export default function HomePage() {
    const nameString = "<Billy Lu/>"
    const interestsArr = ["Anime", "Gamer", "Music-Festivals", "IPA-Appreciation"]
    const interestsMap = interestsArr.map((interest) => {
        return (
            <>
                <li>{interest}</li>
            </>
        )
    })

    return (
        <>
            {/* Home Page Container */}
            <section
                className='flex flex-col items-center justify-center h-[90vh]'
            >
                <div
                    className={`flex flex-row justify-center items-center`}
                >
                    {/* Profile Image Container */}
                    <div
                        className='mx-10'
                    >
                        <img
                            className='border rounded-full object-cover'
                            src="https://media-exp1.licdn.com/dms/image/C5103AQEqdxgwJIiwEA/profile-displayphoto-shrink_800_800/0/1516606953138?e=1663804800&v=beta&t=YTMeyVajpdDdaY1dgDGLMB_kLCA1-MXPl4VLeV1g2aE"
                            alt="Billy Lu"
                        />
                    </div>

                    {/* Name Div Container */}
                    <div
                        className='flex flex-col justify-center'
                    >
                        <p
                            className="text-blue-500 text-[3rem]"
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
                    className='flex justify-center mt-10'
                >
                    <div
                        className='flex flex-col h-[10rem] w-[30rem]'
                    >
                        <h2>Who Am I?</h2>
                        <h3>Hi I'm Billy, I am an engineer from Southern California who likes making useful applications and interesting challenges</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

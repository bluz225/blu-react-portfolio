import React from 'react'

export default function HomePage({ PageVH }) {
    const NameString = "<Billy Lu/>"
    return (
        <>
            <section
                className={`flex flex-row justify-center items-center h-[${PageVH}vh] w-[100vw] mt-[15rem]`}
            >
                <div
                    className='mx-10'
                >
                    <img
                        className='border rounded-full'
                        src="https://media-exp1.licdn.com/dms/image/C5103AQEqdxgwJIiwEA/profile-displayphoto-shrink_800_800/0/1516606953138?e=1663804800&v=beta&t=YTMeyVajpdDdaY1dgDGLMB_kLCA1-MXPl4VLeV1g2aE"
                        alt="Billy Lu"
                    />
                </div>
                <div
                    className='flex items-center'
                >
                    <h1
                        className="text-blue-500 text-[100px]"
                    >
                        {NameString}
                    </h1>
                </div>
            </section>
            <section
                className='flex justify-center mt-10'
            >
                <div
                    className='flex flex-col h-[10rem] w-[30rem]'
                >
                    <h2>Blurp:</h2>
                    <h3>Nulla eiusmod sint sint culpa duis consectetur nulla enim incididunt veniam eu. Cillum in minim fugiat est ad pariatur. Consequat qui sint tempor est velit enim duis.</h3>
                </div>
            </section>
        </>
    )
}

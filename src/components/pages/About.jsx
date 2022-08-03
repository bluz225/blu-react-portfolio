import { React } from 'react'

export default function About() {
    const divStyles = "my-5 max-h-[300px]"

    return (
        <section
            className={`flex flex-col items-center justify-center h-[90vh]`}
        >
            <h1
            className='text-center text-[100px]'
            >About Me</h1>
            <div
                className={`flex flex-col items-center justify-center px-[30vw]`}
            >   
                <div
                    className={`${divStyles}`}
                >
                    <h1>Education:</h1>
                    <p
                        className='pl-4'
                    >
                        I graduated from California Polytechnical State University, San Luis Obispo in 2012 with a BS in Biomedical Engineering. During my career in Medical Device, I obtained the Certified Quality Engineer (CQE) certification from ASQ. Most recently, I have completed a 12 week Immersive Software Engineering from General Assembly where we built multiple applications from front end to full stack.
                    </p>
                </div>
                <div
                    className={`${divStyles}`}
                >
                    <h1>Career:</h1>
                    <p
                        className='pl-4'
                    >
                        I was lucky enough to follow a career that allowed me to use my skills and knowledge to help people in the form of medical device quality engineering. I spent 10 years learning various engineering skills ranging from project management to proposing and leading initiatives to validations of process and test methods.
                    </p>
                </div>
                {/* <div
                    className={`${divStyles}`}
                >
                    <h1>Why are you still reading this?!</h1>
                    <p
                        className='pl-4'
                    >
                        In my spare time, I enjoy EDM and music festivals. I almost exclusively drink IPAs when going out. I am into anime but refuse to watch One Piece until the final Arc. My recently favorite steam game is satisfactory for its complexity and creativity. 
                    </p>
                </div> */}
            </div>
        </section>
    )
}

import {React} from 'react'

export default function About({ PageVH }) {
    const divStyles = "mt-10"

    return (
        <section
            className={`flex flex-row items-center justify-center`}
        >
            <div
                className={`flex flex-col items-center justify-center h-[${PageVH}vh] w-[40vw]`}
            >
                <div
                    className={`${divStyles}`}
                >
                    <h1>Education:</h1>
                    <p>Incididunt nostrud esse non dolore fugiat pariatur sit occaecat aute eu duis fugiat. Qui et occaecat reprehenderit reprehenderit tempor id cillum duis sunt et. Veniam consectetur eu reprehenderit tempor qui eu pariatur aute eu in minim qui ex. Elit voluptate velit culpa sint ipsum.</p>
                </div>
                <div
                    className={`${divStyles}`}
                >
                    <h1>Career:</h1>
                    <p>Incididunt nostrud esse non dolore fugiat pariatur sit occaecat aute eu duis fugiat. Qui et occaecat reprehenderit reprehenderit tempor id cillum duis sunt et. Veniam consectetur eu reprehenderit tempor qui eu pariatur aute eu in minim qui ex. Elit voluptate velit culpa sint ipsum.</p>
                </div>
                <div
                    className={`${divStyles}`}
                >
                    <h1>Why are you still reading this:</h1>
                    <p>Incididunt nostrud esse non dolore fugiat pariatur sit occaecat aute eu duis fugiat. Qui et occaecat reprehenderit reprehenderit tempor id cillum duis sunt et. Veniam consectetur eu reprehenderit tempor qui eu pariatur aute eu in minim qui ex. Elit voluptate velit culpa sint ipsum.</p>
                </div>
            </div>
        </section>
    )
}

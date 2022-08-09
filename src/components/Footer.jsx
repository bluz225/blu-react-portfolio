import React from 'react'
import myResumePDF from "../files/BillyLu-Resume-SoftwareEngineer3.pdf"
import { AiFillFilePdf } from "react-icons/ai"

export default function Footer() {
    const linkStyles = "flex items-center justify-center mx-10"
    const ptagStylesSM = "text-sm w-[30px]"
    const ptageStylesMD = "md:text-lg md:w-[50px]"
    const imgStylesSM = "w-[20px] mx-2"
    const imgStylesMD = "md:w-[50px]"
    const svgStylesSM = "h-[25px] w-[30px]"
    const svgStylesMD = "md:h-[50px] md:w-[50px]"
    return (
        <>
            <footer
                className={`flex justify-center items-center fixed inset-x-1 bottom-1 bg-white h-[5vh] pt-3 md:py-10`}
            >
                <a
                    className={`${linkStyles}`}
                    href='https://github.com/bluz225'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img
                        className={`${imgStylesSM} ${imgStylesMD}`}
                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                        alt='git hub logo'
                    />
                    <p
                        className={`${ptagStylesSM} ${ptageStylesMD}`}
                    >GitHub</p>
                </a>
                <a
                    className={`${linkStyles}`}
                    href='https://www.linkedin.com/in/billy-lu-bbb61652/'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img
                        className={`${imgStylesSM} ${imgStylesMD}`}
                        src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                        alt='Linkedin logo'
                    />
                    <p
                        className={`${ptagStylesSM} ${ptageStylesMD}`}
                    >Linkedin</p>
                </a>

                <a
                    className={`
                        ${linkStyles} 
                    `}
                    href={myResumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <AiFillFilePdf
                        className={`${svgStylesSM} ${svgStylesMD}`}
                    />
                    <p
                        className={`${ptagStylesSM} ${ptageStylesMD}`}
                    >Resume</p>
                </a>
            </footer>
        </>
    )
}

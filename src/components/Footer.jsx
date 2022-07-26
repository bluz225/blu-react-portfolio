import React from 'react'
import myResumePDF from "../files/BillyLu-Resume-SoftwareEngineer.pdf"

export default function Footer({bgColor}) {
    const linkStyles = "mx-10"
    return (
        <>
            <footer
                className={`flex justify-center items-center fixed inset-x-0 bottom-0 bg-[#${bgColor}] h-[5vh]`}
            >
                <a
                    className={`${linkStyles} flex items-center`}
                    href='https://github.com/bluz225'>
                    <img
                        className='w-[32px] mx-2'
                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                        alt='git hub logo'
                    />
                    <p>GitHub Link</p>
                </a>
                <a
                    className={`${linkStyles} flex items-center`}
                    href='https://www.linkedin.com/in/billy-lu-bbb61652/'>
                    <img
                        className='w-[32px] mx-2'
                        src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                        alt='Linkedin logo'
                    />
                    <p>Linkedin</p>
                </a>

                <a 
                    className={`${linkStyles} flex items-center`}
                    href={myResumePDF}
                    download="Billy_Lu_Resume.pdf"
                >
                    <p>Resume</p>
                </a>
            </footer>
        </>
    )
}

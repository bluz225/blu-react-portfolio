import React from 'react'

export default function Footer() {
    const linkStyles = "mx-10"
    return (
        <>
            <footer
                className='flex justify-center items-center fixed inset-x-0 bottom-[2vh]'
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
            </footer>
        </>
    )
}
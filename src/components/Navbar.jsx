import {React, useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function Navbar({currentNav}) {
    const currentTabColor = "text-slate-700"
    const linkTextColor = "text-white"
    const linkStyles = `mx-10 hover:text-slate-500`
    const [homeLinkColor, setHomeLinkColor]  = useState("")
    const [aboutLinkColor, setAboutLinkColor] = useState("")
    const [projectsLinkColor, setProjectsLinkColor]  = useState("")

    useEffect(()=>{
        if (currentNav === "home") {
            setHomeLinkColor(currentTabColor)
            setAboutLinkColor(linkTextColor)
            setProjectsLinkColor(linkTextColor)
        } else if (currentNav === "about") {
            setHomeLinkColor(linkTextColor)
            setAboutLinkColor(currentTabColor)
            setProjectsLinkColor(linkTextColor)
        } else if (currentNav === "projects") {
            setHomeLinkColor(linkTextColor)
            setAboutLinkColor(linkTextColor)
            setProjectsLinkColor(currentTabColor)
        }
    }, [currentNav])

    return (
        <>
        <div
            className={`bg-gray-400 flex justify-center items-center py-5 px-[10px] h-[5vh] md:justify-end`}
        >
            <Link
                className={`${linkStyles} ${homeLinkColor}`}
                to="/">Home</Link>
            <Link
                className={`${linkStyles} ${aboutLinkColor}`}
                to="/about">About</Link>
            <Link
                className={`${linkStyles} ${projectsLinkColor}`}
                to="/projects">Projects</Link>


        </div>
        </>
    )
}

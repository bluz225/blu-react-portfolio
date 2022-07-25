import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar({bgColor}) {
    const linkStyles = "mx-10"
    return (
        <div
            className={`flex justify-end items-center px-[10px] h-[5vh] bg-[#${{bgColor}}]`}
        >
            <Link
                className={linkStyles}
                to="/">Home</Link>
            <Link
                className={linkStyles}
                to="/about">About</Link>
            <Link
                className={linkStyles}
                to="/projects">Projects</Link>


        </div>
    )
}

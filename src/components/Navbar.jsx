import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar({ NavBarVH }) {
    const linkStyles = "mx-10"
    return (
        <div
            className={`flex justify-end items-center h-[${NavBarVH}vh] w-[100vw]`}
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

import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    const linkStyles = "mx-10"
    return (
        <div
            className={`flex justify-end items-center mx-[10px] fixed inset-x-0 top-[2vh]`}
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

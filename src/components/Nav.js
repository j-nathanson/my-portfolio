import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div className="nav-links">
                <a href="#contact">contact</a>
                <a href="#about">about</a>
                <a href="#projects">projects</a>
                <a href="resume/resume.pdf" download>resume</a>
            </div>
        </nav>
    )
}

import React from 'react'
import { Link } from 'react-scroll'

export default function Nav() {
    return (
        <nav>
            <div className="nav-links">
                <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >contact</Link>
                <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                >about</Link>
                <Link
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                >projects</Link>
                <a href="resume/resume.pdf" download>resume</a>
            </div>
        </nav>
    )
}

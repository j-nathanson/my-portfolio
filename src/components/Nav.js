import React from 'react'
import { Link } from 'react-scroll'

export default function Nav() {
    return (
        <nav>
            <div className="nav-links">
                <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >contact</Link>
                <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >about</Link>
                <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >projects</Link>
                <a href="resume/resume.pdf" download>resume</a>
            </div>
        </nav>
    )
}

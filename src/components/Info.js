import React from 'react'

export default function About() {
    return (
        <div className='info-section' id='about'>
            <section className='about-section'>
                <h2>About</h2>
                <div className="text-container">
                    <p>
                        I began my career as an ESL teacher in Vietnam, before being thrusted into the world of online teaching due to covid-19.
                    </p>
                    <br />
                    <p>
                        After being frustrated with hard to use teaching software, I started learning about web development and have developed a passion for solving problems and creating pleasent experiences with code.
                    </p>
                </div>

            </section>
            <section className='skills-section'>
                <h2>Skills</h2>
                <div className='skills-icon-container'>
                    <div className="skills-icon html-icon" />
                    <div className="skills-icon css-icon" />
                    <div className="skills-icon js-icon" />
                    <div className="skills-icon sass-icon" />
                    <div className="skills-icon bootstrap-icon" />
                    <div className="skills-icon react-icon" />
                    <div className="skills-icon redux-icon" />
                    <div className="skills-icon mongo-icon" />
                    <div className="skills-icon node-icon" />
                </div>
            </section>

        </div>
    )
}

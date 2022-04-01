import React from 'react'

export default function About() {
    return (
        <div className='info-section' id='about'>
            <section className='about-section'>
                <h2>About</h2>
                <div className="text-container">
                    <p>
                        My interest in web development began while I was an ESL instructor in Vietnam. As the pandemic progressed and remote learning became mandatory, the teaching software that was in place was often hard to use for both instructors and students.
                    </p>
                    <br />
                    <p>
                        Through my web development education, I realized that my abilities enable me to create more useful and pleasant experiences across an unlimited variety of user requirements.
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

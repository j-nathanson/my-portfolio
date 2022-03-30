import React from 'react'

export default function Hero() {
    return (
        <div className='hero-section'>
            <div className="hero-content-container">
                <h1>Hey there, I’m
                    Jacob Nathanson
                </h1>
                <h2>
                    Full stack developer  from
                    Brooklyn, New York
                </h2>
                <div className="hero-icon-container">
                    <a href="mailto:jacobnath93@gmail.com"><div className="mail-icon" /></a>
                    <a href='https://github.com/j-nathanson' target='_blank' rel='noreferrer' ><div className="github-icon" /></a>
                    <a href='https://www.linkedin.com/in/jacob-nathanson-14201688/' target='_blank' rel='noreferrer' ><div className="linkedin-icon" /></a>
                </div>
                <h4>&lt;&#47;&gt;</h4>
            </div>
        </div >
    )
}

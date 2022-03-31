import React from 'react'
import Card from './Card'
import { PROJECT_DATA } from '../shared/project-data'

export default function Projects() {
    return (
        <div className='projects-section' id='projects'>
            <div className='projects-content-container'>
                <h2>Projects</h2>
                <div className="projects-container">
                    {PROJECT_DATA.map((project, i) => < Card key={i} img={project.img} title={project.title} description={project.description} link={project.link} />
                    )}
                </div>
            </div>
        </div>
    )
}

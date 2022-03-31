import React from 'react'

export default function Card({ img, title, description, link }) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={img} alt={title} />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <h4> <a href={link} target='_blank' rel='noreferrer'>github</a></h4>
            </div>
        </div>
    )
}

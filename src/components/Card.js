import React from 'react'

export default function Card({ img, title, description, gitUrl, liveUrl }) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={img} alt={title} />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <div className="card-urls">
                    <a href={gitUrl} target='_blank' rel='noreferrer'>github</a>

                    {liveUrl && (
                        <a href={liveUrl} target='_blank' rel='noreferrer'>live site</a>
                    )}
                </div>
            </div>
        </div>
    )
}

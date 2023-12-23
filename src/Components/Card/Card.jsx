import React from 'react'
import './card.scss'

export default function Card(props) {
    return (
        <div className='card'>
            <div className="card-container">
                <h3>{props.object.title}</h3>
                <p>{props.object.body}</p>
                <p>id: {props.object.id}</p>
            </div>
        </div>
    )
}

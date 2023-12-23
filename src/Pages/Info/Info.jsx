import React from 'react'
import data from '../../data.json'
import Card from '../../Components/Card/Card'
import './Info.scss'

export default function Info({ cards, setCards }) {
    return (
        <div className='info'>
            <div className="info-container">
                {
                    data.map((item, index) => (
                        <Card key={index} object={item} />
                    ))
                }
            </div>

        </div>
    )
}

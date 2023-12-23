import React from 'react'
import { useState } from 'react'
import data from '../../data.json'
import './cards.scss'


export default function Cards(props) {

  const [count, setCount] = useState(0);

  function handleCardsNext() {
    setCount((prevCount) => (prevCount + 1 +data.length) % data.length)
  }
  function handleCardsPrev() {
    setCount((prevCount) => (prevCount - 1 + data.length) % data.length)
  }

  const getCurrentCard = () => {
    return data[count];
  };

  return (
    <div>
      <h2>SLIDER</h2>
      <div className="container">
        <button onClick={handleCardsPrev}>PREV</button>
        <div className="card">
          <h2>{getCurrentCard().title}</h2>
          <p>{getCurrentCard().body}</p>
          <p>id: {getCurrentCard().id}</p>
        </div>
        <button onClick={handleCardsNext}>NEXT</button>
      </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import data from '../../data.json'
import './create.scss'

export default function Create(props) {

  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  function createData(){
    const newCard = {
      id: data.length + 1,
      titleInp,
      bodyInp
    };
    props.setCards([...props.cards, newCard]);
  }

  return (
    <div>
      <h3>Добавить карточку</h3>
      <form>
        <input type="text" id='bodyInp' placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
        <input type="text" id='titleInp' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className='buttonSubmit' type="button" onClick={
          () => {
            createData(bodyInp, titleInp)
            setBody('')
            setTitle('')
          }
        } />
      </form>
    </div>
  )
}

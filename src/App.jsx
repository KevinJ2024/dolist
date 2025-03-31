import { useState } from 'react'
import './App.css'

function App() {

  const addNote = (title, text) => {
    console.log(title,text)
  }

  return (
    <>
    <h1 id="DoList">Do List</h1>
      <div id="note-info">
        <input type="text" id="note-title" placeholder='Ingrese el titulo de la nota'></input>
        <textarea id="note-text" placeholder='Ingrese el texto de la nota'></textarea>
        <button onClick={() => addNote(document.getElementById("note-title").value,document.getElementById("note-text").value)} id="btnAdd">Add</button>
        <div id="buttons">
        <button className='note-info-button'>All</button> 
        <button className='note-info-button'>Pending</button> 
        <button className='note-info-button'>Completed</button>
        </div>
      </div>
    </>
  )
}

export default App

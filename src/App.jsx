import { useContext, useState } from 'react'
import { NoteContext } from './context/Context'
import { NoteCard } from './components/NoteCard/NoteCard'
import './App.css'

function App() {
  const { notes, addNote } = useContext(NoteContext)
  const { bgColor } = useContext(NoteContext)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const handleAddNote = () => {
    addNote(title, text, bgColor)
    setTitle("")
    setText("")
  }

  return (
    <>
      <h1>Do List</h1>
      <div id="note-info">
        <input type="text" value={title} id='titleTask' placeholder="Ingrese el título de la nota" onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={text} id='textTask' placeholder="Ingrese el texto de la nota" onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={handleAddNote} id="btnAdd">Add</button>
      </div>

      <div id="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} id={note.id} title={note.title} text={note.text} bgColor={note.bgColor} />
        ))}
      </div>
    </>
  )
}

export default App

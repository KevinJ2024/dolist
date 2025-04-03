import { useContext, useState } from 'react'
import { NoteContext } from './context/Context'
import { NoteCard } from './components/NoteCard/NoteCard'
import './App.css'

function App() {
  const { filteredNotes, addNote, filterAll, filterPending, filterCompleted } = useContext(NoteContext)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const handleAddNote = () => {
    addNote(title, text)
    setTitle("")
    setText("")
  }

  return (
    <>
      <h1>Do List</h1>
      <div id="note-info">
        <input type="text" id='titleTask' value={title} placeholder="insert the title" onChange={(e) => setTitle(e.target.value)} />
        <textarea value={text} id='textTask' placeholder="Insert the description" onChange={(e) => setText(e.target.value)} />
        <button id='btnAdd' onClick={handleAddNote}>Add</button>
        <div id="buttons">
        <button className='btnFilter' onClick={filterAll}>All</button>
        <button className='btnFilter' onClick={filterPending}>Pending</button>
        <button className='btnFilter' onClick={filterCompleted}>Completed</button>
        </div>
      </div>

      <div id="note-list">
        {filteredNotes.map(note => (
          <NoteCard key={note.id} id={note.id} title={note.title} text={note.text} bgColor={note.bgColor} isCompleted={note.isCompleted} />
        ))}
      </div>
    </>
  )
}

export default App

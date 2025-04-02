import { useContext, useState } from 'react'
import { NoteContext } from './context/Context';
import { NoteCard } from './components/NoteCard/NoteCard';
import './App.css'


function App() {

  const { notes, addNote } = useContext(NoteContext);


  const handleAddNote = () => {
      addNote(title, text);
      setTitle("");
      setText("");
  };

  return (
    <>
      <h1>Do List</h1>
      <div id="note-info">
        <input type="text" value={title} id='titleTask' placeholder="Ingrese el título de la nota" onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={text} id='textTask' placeholder="Ingrese el texto de la nota" onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={() => handleAddNote}>Add</button>
      </div>

      <div id="note-list">
        {notes.map((note, i) => (
          <NoteCard key={i} title={note.title} text={note.text} />
        ))}
      </div>
    </>
  )
}

export default App

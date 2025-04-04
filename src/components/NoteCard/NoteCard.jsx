import { useContext, useState, useEffect } from 'react'
import { NoteContext } from '../../context/context'
import './NoteCard.css'

export const NoteCard = ({ id, title, text, bgColor, isCompleted }) => {
  let content;
  const { changeBgColor, editNote } = useContext(NoteContext)
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newText, setNewText] = useState(text)

  const handleChangeBgColor = (e) => {
    const checked = e.target.checked
    changeBgColor(id, checked)
  }

  const handleEdit = () => {
    setIsEditing(!isEditing)
    if (isEditing) {
      editNote(id, newTitle, newText)
    }
  }

  if (isEditing) {
    content = (
      <div>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <textarea value={newText} onChange={(e) => setNewText(e.target.value)} />
      </div>
    )
  } else {
    content = (
      <div>
        <h1>{newTitle}</h1>
        <div className="note-card-content">
          <h3 id="text-note">{newText}</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="note-card" style={{ backgroundColor: bgColor }}>
      {content}
      <div className="check-container">
        <input type="checkbox" checked={isCompleted} onChange={handleChangeBgColor} />
        <button id="edit-note" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

import { useContext, useState, useEffect } from 'react'
import { NoteContext } from '../../context/context'
import './NoteCard.css'

export const NoteCard = ({ id, title, text, bgColor, isCompleted }) => {
  let content;
  const { changeBgColor, editNote } = useContext(NoteContext)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [currentText, setCurrentText] = useState(text)

  useEffect(() => {
    setCurrentTitle(title)
    setCurrentText(text)
  }, [title, text])

  const handleChangeBgColor = (e) => {
    const checked = e.target.checked
    changeBgColor(id, checked)
  }

  const handleEdit = () => {
    setIsEditing(!isEditing)
    if (isEditing) {
      editNote(id, currentTitle, currentText)
    }
  }

  if (isEditing) {
    content = (
      <div>
        <input type="text" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} />
        <textarea value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
      </div>
    )
  } else {
    content = (
      <div>
        <h1>{currentTitle}</h1>
        <div className="note-card-content">
          <h3 id="text-note">{currentText}</h3>
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

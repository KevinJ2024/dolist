import { useContext } from 'react'
import { NoteContext } from '../../context/Context'
import './NoteCard.css'

export const NoteCard = ({ id, title, text, bgColor, isCompleted }) => {
  const { changeBgColor } = useContext(NoteContext)

  const handleChange = (e) => {
    const checked = e.target.checked
    changeBgColor(id, checked)
  }

  return (
    <div className="note-card" style={{ backgroundColor: bgColor }}>
      <h1>{title}</h1>
      <div className="note-card-content">
        <h3>{text}</h3>
        <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      </div>
    </div>
  )
}

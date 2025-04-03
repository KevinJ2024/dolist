import './NoteCard.css'
import { useContext } from 'react'
import { NoteContext } from '../../context/Context'

export const NoteCard = ({ id, title, text, bgColor }) => {
  const { handleBgColor } = useContext(NoteContext)

  const handleChange = (e) => {
    const checked = e.target.checked
    handleBgColor(id, checked) 
  }

  return (
    <div className="note-card" style={{ backgroundColor: bgColor }}>
      <h1>{title}</h1>
      <div className="note-card-content">
        <h3>{text}</h3>
        <input type="checkbox" onChange={handleChange} />
      </div>
    </div>
  )
}

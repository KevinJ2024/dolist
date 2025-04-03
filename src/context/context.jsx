import { createContext, useState } from "react"

export const NoteContext = createContext()

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])

  const addNote = (title, text) => {
    const newNote = {
      id: crypto.randomUUID(), //pa darle un id
      title,
      text,
      bgColor: "rgb(150, 65, 65)"
    }
    setNotes([...notes, newNote])
  }

  const handleBgColor = (id, isChecked) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          const updatedNote = { ...note }
          if (isChecked) {
            updatedNote.bgColor = "rgb(65, 150, 65)"
          } else {
            updatedNote.bgColor = "rgb(150, 65, 65)"
          }
          return updatedNote
        } else {
          return note
        }
      })
    )
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, handleBgColor }}>
      {children}
    </NoteContext.Provider>
  )
}

import { createContext, useState } from "react"

export const NoteContext = createContext()

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState("all")

  const addNote = (title, text) => {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      text,
      bgColor: "rgb(150, 65, 65)",
      isCompleted: false
    }
    setNotes([...notes, newNote])
  }

  const changeBgColor = (id, isChecked) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          const updatedNote = { ...note }

          if (isChecked) {
            updatedNote.bgColor = "rgb(65, 150, 65)"
            updatedNote.isCompleted = true
          } else {
            updatedNote.bgColor = "rgb(150, 65, 65)"
            updatedNote.isCompleted = false
          }

          return updatedNote
        }
        return note
      })
    )
  }

  const filteredNotes = notes.filter(note => {
    if (filter === "pending") {
      if (!note.isCompleted) {
        return true
      }
      return false
    }

    if (filter === "completed") {
      if (note.isCompleted) {
        return true
      }
      return false
    }

    return true
  })

  const filterAll = () => {
    setFilter("all")
  }

  const filterPending = () => {
    setFilter("pending")
  }

  const filterCompleted = () => {
    setFilter("completed")
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, changeBgColor, filteredNotes, filterAll, filterPending, filterCompleted }}>
      {children}
    </NoteContext.Provider>
  )
}

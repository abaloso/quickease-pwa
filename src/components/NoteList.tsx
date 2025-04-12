"use client"

import type React from "react"

interface Note {
  id: string
  content: string
  createdAt: number
}

interface NoteListProps {
  notes: Note[]
  onDeleteNote: (id: string) => void
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="bg-white p-4 rounded-md shadow">
          <div className="flex justify-between items-start">
            <p className="whitespace-pre-wrap text-gray-800">{note.content}</p>
            <button
              onClick={() => onDeleteNote(note.id)}
              className="ml-2 text-red-500 hover:text-red-700"
              aria-label="Delete note"
            >
              ×
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2">{new Date(note.createdAt).toLocaleString()}</div>
        </li>
      ))}
    </ul>
  )
}

export default NoteList

'use client';

import { useState, useEffect } from 'react';
import { Note } from '@/app/types';
import NoteForm from '@/components/NoteForm';
import NoteList from '@/components/NoteList';

export default function NoteApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const addNote = (content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      content,
      createdAt: Date.now(),
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="space-y-6">
      <div className={`text-sm font-medium text-center p-2 rounded-md ${isOnline ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
        {isOnline ? 'You are online' : 'You are offline - Notes will be saved locally'}
      </div>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}
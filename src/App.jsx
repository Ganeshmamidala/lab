import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from localStorage on component mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('studentNotes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('studentNotes', JSON.stringify(notes));
  }, [notes]);

  // CREATE - Add new note
  const addNote = (noteData) => {
    const newNote = {
      id: Date.now(),
      ...noteData,
      date: new Date().toLocaleString()
    };
    setNotes([newNote, ...notes]);
  };

  // UPDATE - Update existing note
  const updateNote = (id, noteData) => {
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, ...noteData, date: new Date().toLocaleString() + ' (edited)' }
        : note
    ));
    setEditingNote(null);
  };

  // DELETE - Delete note
  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  // Start editing a note
  const handleEdit = (note) => {
    setEditingNote(note);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Student Notes App</h1>
        <p>Manage your study notes efficiently</p>
      </header>

      <div className="container">
        <NoteForm
          onSubmit={editingNote ? updateNote : addNote}
          editingNote={editingNote}
          onCancel={handleCancelEdit}
        />

        <div className="notes-section">
          <div className="notes-header">
            <h2>All Notes ({filteredNotes.length})</h2>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <NotesList
            notes={filteredNotes}
            onEdit={handleEdit}
            onDelete={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import NoteCard from './NoteCard';

function NotesList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="empty-message">
        No notes available. Add your first note!
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;

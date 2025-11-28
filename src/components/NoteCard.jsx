function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="note-card">
      <div className="note-header">
        <div className="note-info">
          <h3>{note.title}</h3>
          <div className="student-name">👤 {note.studentName}</div>
          <div className="note-date">📅 {note.date}</div>
        </div>
        <div className="note-actions">
          <button 
            className="btn btn-edit" 
            onClick={() => onEdit(note)}
          >
            Edit
          </button>
          <button 
            className="btn btn-delete" 
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="note-content">{note.content}</div>
    </div>
  );
}

export default NoteCard;

import { useState, useEffect } from 'react';

function NoteForm({ onSubmit, editingNote, onCancel }) {
  const [formData, setFormData] = useState({
    studentName: '',
    title: '',
    content: ''
  });

  // Update form when editing note changes
  useEffect(() => {
    if (editingNote) {
      setFormData({
        studentName: editingNote.studentName,
        title: editingNote.title,
        content: editingNote.content
      });
    } else {
      setFormData({ studentName: '', title: '', content: '' });
    }
  }, [editingNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingNote) {
      onSubmit(editingNote.id, formData);
    } else {
      onSubmit(formData);
    }
    
    // Reset form
    setFormData({ studentName: '', title: '', content: '' });
  };

  return (
    <div className="note-form-container">
      <h2>{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Note Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter note title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Note Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter your note here..."
            rows="5"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingNote ? 'Update Note' : 'Add Note'}
          </button>
          {editingNote && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NoteForm;

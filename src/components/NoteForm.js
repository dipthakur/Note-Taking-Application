import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveNoteToLocalStorage, getNoteFromLocalStorage } from '../utils/localStorage';

const NoteForm = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const existingNote = getNoteFromLocalStorage(id);
      if (existingNote) setNote(existingNote);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNoteToLocalStorage(note, id);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Note' : 'Add Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">{id ? 'Update Note' : 'Add Note'}</button>
      </form>
    </div>
  );
};

export default NoteForm;

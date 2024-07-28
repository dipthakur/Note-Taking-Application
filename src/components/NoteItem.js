import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content.substring(0, 100)}...</p>
      <p><small>{new Date(note.timestamp).toLocaleString()}</small></p>
      <button className='edit' onClick={() => onEdit(note.id)}>Edit</button>
      <button className='delete' onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;

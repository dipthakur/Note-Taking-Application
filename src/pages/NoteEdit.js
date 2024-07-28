import React from 'react';
import NoteForm from '../components/NoteForm';

const NoteEdit = (props) => {
  return (
    <div>
      <NoteForm {...props} />
    </div>
  );
};

export default NoteEdit;

import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { getNotesFromLocalStorage, deleteNoteFromLocalStorage } from '../utils/localStorage';

const NoteList = ({ onEdit }) => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  useEffect(() => {
    const storedNotes = getNotesFromLocalStorage();
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    deleteNoteFromLocalStorage(id);
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note =>
    note.title.includes(searchQuery) || note.content.includes(searchQuery)
  );

  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  return (
    <div className="container">
      <SearchBar setSearchQuery={setSearchQuery} />
      {paginatedNotes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredNotes.length / notesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default NoteList;

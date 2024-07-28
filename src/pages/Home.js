import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';

const Home = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='add-note' >
      <h1>Simple Note Taking App</h1>
      <button onClick={() => navigate('/add')}>Add Note</button>
      <NoteList onEdit={handleEdit} />
    </div>
  );
};

export default Home;

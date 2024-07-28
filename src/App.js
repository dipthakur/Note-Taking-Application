import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import NoteEdit from '../src/pages/NoteEdit';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<NoteEdit />} />
          <Route path="/edit/:id" element={<NoteEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

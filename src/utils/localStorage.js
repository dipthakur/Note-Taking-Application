export const getNotesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  };
  
  export const getNoteFromLocalStorage = (id) => {
    const notes = getNotesFromLocalStorage();
    return notes.find(note => note.id === id);
  };
  
  export const saveNoteToLocalStorage = (note, id) => {
    const notes = getNotesFromLocalStorage();
    if (id) {
      const noteIndex = notes.findIndex(n => n.id === id);
      if (noteIndex > -1) {
        notes[noteIndex] = { ...note, id, timestamp: new Date().toISOString() };
      }
    } else {
      notes.push({ ...note, id: Date.now().toString(), timestamp: new Date().toISOString() });
    }
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const deleteNoteFromLocalStorage = (id) => {
    const notes = getNotesFromLocalStorage();
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  
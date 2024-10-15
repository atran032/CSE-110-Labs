import './App.css';
import React, { useState, useEffect, useContext, ChangeEventHandler } from 'react';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constant"; // Import the dummyNotesList from the appropriate module
import { ThemeContext, themes } from "./themeContext";
import { ClickCounter, ToggleTheme } from "./hooksExercise";
import { title } from 'process';

export const StickyNotes = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    const [notes, setNotes] = useState(dummyNotesList);
  
    const initialNote = {
      id: -1,
      title: "",
      content: "",
      label: Label.other,
      like: false,
    };
    const [createNote, setCreateNote] = useState(initialNote);
    const [selectedNote, setSelectedNote] = useState<Note>(initialNote);
   
    const createNoteHandler = (event: React.FormEvent) => {
      event.preventDefault();
      console.log("title: ", createNote.title);
      console.log("content: ", createNote.content);
      createNote.id = notes.length + 1;
      setNotes([createNote, ...notes]);
      setCreateNote(initialNote);
    };
   
  
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    }
  
    const handleLike = (id: number) => {
      setNotes((notes) =>
        notes.map((Note) =>
          Note.id === id ? { ...Note, like: !Note.like } : Note
        )
      );
    };
  
    const handleUpdate = (id: number) => {
      setNotes((notes) =>
        notes.map((Note) =>
          Note.id === id ? { ...Note, title: selectedNote.title,
                                      content: selectedNote.content,
                                      label: selectedNote.label} : Note
        )
      );
      setSelectedNote(initialNote);
    }
  
    const handleDelete = (id: number) => {
      setNotes((notes) =>
        notes.filter((Note) => Note.id !== id)
      );
    }
  
    const likedNotes = notes.filter((note) => note.like);

    function ListLikes(note: Note) {
        return <li key={note.title}>{note.title}</li>
    }
  
    return (
      <div className="app-container" style={{background: currentTheme.background, margin: '20', color: currentTheme.text}}>
        <form className="note-form" onSubmit={createNoteHandler}>
          <div><input placeholder="Note Title" onChange={(event) =>
            setCreateNote({ ...createNote, title: event.target.value })} required>
          </input></div>
          <div><textarea placeholder= "Note Content" onChange={(event) =>
            setCreateNote({ ...createNote, content: event.target.value })} required>
            </textarea></div>
          <div>
               <select onChange={(event) =>
                 setCreateNote({ ...createNote, label: event.target.value as Label })} required>
                 <option value={Label.personal}>Personal</option>
                 <option value={Label.study}>Study</option>
                 <option value={Label.work}>Work</option>
                 <option value={Label.other}>Other</option>
               </select>
             </div>
          <div><button type="submit">Create Note</button></div>
          <div className="like-list">
            <h3>Favorite Notes</h3>
            <ol>
              {likedNotes.map((Note) => ListLikes(Note))}
            </ol>
          </div>
        </form>
        <div className="notes-grid" >
          {notes.map((Note) => (
            <div key={Note.id} className="note-item" style={{background: currentTheme.foreground, color: currentTheme.text}}>
              <div className="notes-header">
                <button onClick={() => handleLike(Note.id)}>{Note.like ? '❤️' : '🤍'}</button>
                <button onClick={() => handleUpdate(Note.id)}>💾</button>
                <button data-testid={`X-${Note.id}`} onClick={() => handleDelete(Note.id)}style={{color: currentTheme.text}}>X</button>
              </div>
              <h2 contentEditable="true" onBlur={(event) =>
                setSelectedNote({ ...selectedNote, title: event.target.innerText })}>{Note.title}
              </h2>
              <p contentEditable="true" onBlur={(event) =>
                setSelectedNote({ ...selectedNote, content: event.target.innerText })}>{Note.content}
              </p>
              <select onChange={(event) =>
                   setSelectedNote({ ...selectedNote, label: event.target.value as Label })} required>
                   <option value={Label.personal}>Personal</option>
                   <option value={Label.study}>Study</option>
                   <option value={Label.work}>Work</option>
                   <option value={Label.other}>Other</option>
                 </select>
            </div>
          ))}
        </div>
        <div className='toggle-button'>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </div>
    );
}
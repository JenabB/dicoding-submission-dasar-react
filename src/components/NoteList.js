import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((el) => (
        <NoteItem key={el.id} {...el} />
      ))}
    </div>
  );
}

export default NoteList;

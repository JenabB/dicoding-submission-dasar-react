import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ title, body, isArchieved, createdAt }) {
  return (
    <div className="note-item">
      <h1 className="note-item__title">{title}</h1>
      <p className="note-item__content">{body}</p>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__action">
        <button className="note-item__archive-button">Edit</button>
        <button className="note-item__archive-button">Archive</button>
        <button className="note-item__delete-button">Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;

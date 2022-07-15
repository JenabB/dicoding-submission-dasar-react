import React, { useState } from "react";
import { showFormattedDate } from "../utils";
import DeleteModal from "./DeleteModal";

function NoteItem({ id, title, body, isArchieved, createdAt, onDelete }) {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => setOpen(!open);

  return (
    <>
      {open && (
        <DeleteModal id={id} onConfirm={onDelete} onClose={handleDeleteClick} />
      )}
      <div className="note-item">
        <h1 className="note-item__title">{title}</h1>
        <p className="note-item__content">{body}</p>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <div className="note-item__action">
          <button className="note-item__archive-button">Edit</button>
          <button className="note-item__archive-button">Archive</button>
          <button
            className="note-item__delete-button"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteItem;

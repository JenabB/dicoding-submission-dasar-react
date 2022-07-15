import React from "react";
import NoteItem from "./NoteItem";

const ArchivedNote = ({ notes, onDelete, onArchive }) => {
  return (
    <div>
      <h1>Archived Note</h1>
      <div className="notes-list">
        {notes.find((el) => el.archived) ? (
          notes
            .filter((el) => el.archived)
            .map((note, index) => (
              <NoteItem
                key={index}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
        ) : (
          <h1 className="notes-list__empty-message">No note archived yet</h1>
        )}
      </div>
    </div>
  );
};

export default ArchivedNote;

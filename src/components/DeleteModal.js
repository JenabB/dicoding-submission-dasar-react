import React from "react";

const DeleteModal = ({ id, onClose, onConfirm }) => {
  const confirmDelete = (id) => {
    onConfirm(id);
    onClose();
  };
  return (
    <div className="delete-modal">
      <div className="modal-content">
        <h1>Delete this note?</h1>
        <button
          className="note-item__delete-button"
          onClick={() => confirmDelete(id)}
        >
          Confirm
        </button>
        <button className="note-item__archive-button" onClick={onClose}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;

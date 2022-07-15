import React from "react";
import { showFormattedDate } from "../utils";
import DeleteModal from "./DeleteModal";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: props.id,
      title: props.title,
      body: props.body,
      createdAt: props.createdAt,
    };

    this.onArchive = props.onArchive;
    this.onDelete = props.onDelete;
    this.onDeleteOpen = this.onDeleteOpen.bind(this);
  }

  onDeleteOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <>
        {this.state.open && (
          <DeleteModal
            id={this.state.id}
            onConfirm={this.onDelete}
            onClose={this.onDeleteOpen}
          />
        )}
        <div className="note-item">
          <h1 className="note-item__title">{this.state.title}</h1>
          <p className="note-item__content">{this.state.body}</p>
          <p className="note-item__date">
            {showFormattedDate(this.state.createdAt)}
          </p>
          <div className="note-item__action">
            <button className="note-item__archive-button">Edit</button>
            <button
              className="note-item__archive-button"
              onClick={() => this.onArchive(this.state.id)}
            >
              Archive
            </button>
            <button
              className="note-item__delete-button"
              onClick={this.onDeleteOpen}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NoteItem;

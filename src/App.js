import React from "react";
import { getInitialData } from "./utils";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";
import ArchivedNote from "./components/ArchivedNote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      notes: getInitialData(),
    };

    this.onQueryChange = this.onQueryChange.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  onArchiveHandler(id) {
    const updatedNote = this.state.notes.find((el) => el.id === id);
    updatedNote.archived = !updatedNote.archived;
    const update = this.state.notes.map((el) => {
      if (el.id === id) {
        return updatedNote;
      }
      return el;
    });
    this.setState({ notes: update });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((el) => el.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body, archived, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt,
          },
        ],
      };
    });
  }

  render() {
    const items = this.state.notes
      .filter((data) => {
        if (this.state.query === null) return data;
        else if (
          data.title.toLowerCase().includes(this.state.query.toLowerCase())
        ) {
          console.log(data);
          return data;
        }
      })
      .filter((data) => !data.archived)
      .map((el, index) => {
        return (
          <NoteItem
            key={index}
            {...el}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        );
      });
    return (
      <div className="contact-app">
        <NoteInput addNote={this.onAddNoteHandler} />
        {this.state.notes.length > 0 ? (
          <input
            type="search"
            placeholder="Search"
            value={this.state.query}
            onChange={this.onQueryChange}
          />
        ) : (
          <h1 className="notes-list__empty-message">No note yet</h1>
        )}
        <div className="notes-list">{items}</div>

        {/* archived note */}
        <ArchivedNote
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default App;

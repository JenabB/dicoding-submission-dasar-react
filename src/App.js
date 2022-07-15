import React from "react";
import { getInitialData } from "./utils";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";

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
  }

  onQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((el) => el.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body, archieved, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archieved,
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
          return data;
        }
      })
      .map((data, index) => {
        return (
          <NoteItem key={index} {...data} onDelete={this.onDeleteHandler} />
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
      </div>
    );
  }
}

export default App;

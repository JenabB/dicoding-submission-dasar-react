import React from "react";
import { getInitialData } from "./utils";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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
    return (
      <div className="contact-app">
        <NoteInput addNote={this.onAddNoteHandler} />
        {/* <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        /> */}
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;

import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //initiai state
    this.state = {
      id: "",
      title: "",
      body: "",
      archived: false,
      createdAt: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          className="note-input__title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="text"
          className="note-input__body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NoteInput;

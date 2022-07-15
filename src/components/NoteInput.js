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
      createdAt: new Date(),
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, limit),
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
        <h1>Title</h1>
        {this.state.title.length > 0 ? (
          <p>{50 - this.state.title.length} chara left</p>
        ) : (
          ""
        )}
        <input
          type="text"
          className="note-input__title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <h1>Body</h1>
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

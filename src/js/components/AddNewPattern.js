import React from "react";
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { addPattern } from "../actions/patternActions";
import PatternContent from "./PatternContent";

@connect()
export default class AddNewPattern extends React.Component {
  constructor() {
    super()
    this.state = {
      id: Date.now(),
      name: '',
      categoryId: null,
      description: '',
      exampleHTML: '',
      notesHTML: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  save() {
    const { history } = this.props;
    const { categoryId } = this.props.match.params;
    const { id, name, description, exampleHTML, notesHTML } = this.state;
    this.props.dispatch(addPattern(
      id,
      categoryId,
      name,
      exampleHTML,
      description,
      notesHTML,
    ));

    history.push(`/category/${categoryId}`);
  }

  handleInputChange(event) {
    const target = event.target;
    const prop = target.id;
    const val = target.value;
    const newState = {...this.state, [prop]: val};

    this.setState(newState);
  }

  render() {
    const textAreaStyle = {
      minWidth: '256px',
      width: '75%',
    };
    const buttonStyle = {
      marginTop: '30px',
    };

    return (
      <div>
        <h2>Add new pattern</h2>
        <form action="#">
          <TextField
            floatingLabelText="Name"
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange.bind(this)}
          />
          <br />
          <TextField
            floatingLabelText="Description"
            hintText="You can input HTML here"
            multiLine={true}
            rowsMax={4}
            id="description"
            value={this.state.description}
            onChange={this.handleInputChange.bind(this)}
            style={textAreaStyle}
          />
          <br />
          <TextField
            floatingLabelText="Example Code"
            hintText="You can input HTML here"
            multiLine={true}
            rowsMax={4}
            id="exampleHTML"
            value={this.state.exampleHTML}
            onChange={this.handleInputChange.bind(this)}
            style={textAreaStyle}
          />
          <br />
          <TextField
            floatingLabelText="Notes"
            hintText="You can input HTML here"
            multiLine={true}
            rowsMax={4}
            id="notesHTML"
            value={this.state.notesHTML}
            onChange={this.handleInputChange.bind(this)}
            style={textAreaStyle}
          />
          <br />
          <RaisedButton label="Save" onClick={this.save.bind(this)} style={buttonStyle} />
        </form>

        <br />
        <br />
        <h3>Here's what it will look like</h3>
        <PatternContent pattern={this.state} />
      </div>
    );
  }
}

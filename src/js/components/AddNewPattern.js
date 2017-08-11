import React from "react";
import { connect } from "react-redux";

import { addPattern } from "../actions/patternActions";

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
    return (
      <div>
        <h2>Add new pattern</h2>
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input"
              type="text"
              id="name" value={this.state.name}
              onChange={this.handleInputChange.bind(this)} />
            <label class="mdl-textfield__label" for="name">Name...</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input"
              type="text"
              id="description"
              value={this.state.description}
              onChange={this.handleInputChange.bind(this)} />
            <label class="mdl-textfield__label" for="description">Description...</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input"
              type="text"
              id="exampleHTML"
              value={this.state.exampleHTML}
              onChange={this.handleInputChange.bind(this)} />
            <label class="mdl-textfield__label" for="exampleHTML">Example HTML...</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input"
              type="text"
              id="notesHTML"
              value={this.state.notesHTML}
              onChange={this.handleInputChange.bind(this)} />
            <label class="mdl-textfield__label" for="notesHTML">Notes HTML...</label>
          </div>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={this.save.bind(this)}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

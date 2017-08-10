import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PatternStore extends EventEmitter {
  constructor() {
    super()
    this.patterns = [
      {
        id: 1,
        categoryId: 1,
        name: "Pattern 1",
        description: "This is a standard Moodle pattern thing.",
        exampleHTML: "<p>This is an example pattern</p>",
        notesHTML: "<p>This pattern has some <strong>notes!</strong></p>",
      },
      {
        id: 2,
        categoryId: 1,
        name: "Pattern 2",
        exampleHTML: "<p>This is an example pattern</p>",
        notesHTML: "",
      },
      {
        id: 3,
        categoryId: 2,
        name: "Pattern 3",
        exampleHTML: "<p>This is an example pattern</p>",
        notesHTML: "",
      },
    ];
  }

  getAll() {
    return this.patterns;
  }

  getForCategory(id) {
    return this.patterns.filter((pattern) => {
      return pattern.categoryId == id;
    });
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_PATTERN": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_PATTERNS": {
        this.patterns = action.patterns;
        this.emit("change");
        break;
      }
    }
  }

}

const patternStore = new PatternStore;
dispatcher.register(patternStore.handleActions.bind(patternStore));

export default patternStore;

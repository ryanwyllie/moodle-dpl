import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CategoryStore extends EventEmitter {
  constructor() {
    super()
    this.categories = [
      {
        id: 1,
        route: "/test1",
        name: "Test 1",
        description: "<p>Some <strong>HTML</strong> content</p>"
      },
      {
        id: 2,
        route: "/test2",
        name: "Test 2",
      },
      {
        id: 3,
        route: "/test3",
        name: "Test 3",
      },
    ];
  }

  getAll() {
    return this.categories;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_CATEGORY": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_CATEGORIES": {
        this.todos = action.categories;
        this.emit("change");
        break;
      }
    }
  }

}

const categoryStore = new CategoryStore;
dispatcher.register(categoryStore.handleActions.bind(categoryStore));

export default categoryStore;

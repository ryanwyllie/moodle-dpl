export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: "FETCH_CATEGORIES"});

    setTimeout(() => {
      dispatch({type: "FETCH_CATEGORIES_FULFILLED", payload: [
        {
          id: 1,
          name: "Test 1",
          description: "<p>Some <strong>HTML</strong> content</p>",
          loading: false,
        },
        {
          id: 2,
          name: "Test 2",
          description: null,
          loading: false,
        },
        {
          id: 3,
          name: "Test 3",
          description: null,
          loading: false,
        },
      ]});
    }, 1000);
  }
}

export function addCategory(id, name, description=null) {
  return {
    type: 'ADD_CATEGORY',
    payload: {
      id,
      name,
      description,
    },
  }
}

export function updateCategory(id, name, description) {
  return {
    type: 'UPDATE_CATEGORY',
    payload: {
      id,
      name,
      description,
    },
  }
}

export function deleteCategory(id) {
  return { type: 'DELETE_CATEGORY', payload: id}
}

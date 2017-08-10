export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: "FETCH_CATEGORIES"});

    setTimeout(() => {
      dispatch({type: "FETCH_CATEGORIES_FULFILLED", payload: [
        {
          id: 1,
          route: "/test1",
          name: "Test 1",
          description: "<p>Some <strong>HTML</strong> content</p>",
        },
        {
          id: 2,
          route: "/test2",
          name: "Test 2",
          description: null,
        },
        {
          id: 3,
          route: "/test3",
          name: "Test 3",
          description: null,
        },
      ]});
    }, 1000);
  }
}

export function addCategory(id, name, description=null) {
  const route = name.toLowerCase().trim().replace(/\s/g, '');

  return {
    type: 'ADD_CATEGORY',
    payload: {
      id,
      name,
      route,
      description,
    },
  }
}

export function updateCategory(id, name, description) {
  const route = name.toLowerCase().trim().replace(/\s/g, '');

  return {
    type: 'UPDATE_CATEGORY',
    payload: {
      id,
      name,
      route,
      description,
    },
  }
}

export function deleteCategory(id) {
  return { type: 'DELETE_CATEGORY', payload: id}
}

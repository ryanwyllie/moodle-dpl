export function fetchPatternsForCategory(categoryId) {
  const patterns = [
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

  return function(dispatch) {
    dispatch({type: "FETCH_PATTERN_FOR_CATEGORY"});

    setTimeout(() => {
      dispatch({
        type: "FETCH_PATTERN_FOR_CATEGORY_FULFILLED",
        payload: patterns.filter((pattern) => {
          return pattern.categoryId == categoryId;
        })
      });
    }, 1000);
  }
}

export function addPattern(id, categoryId, name, exampleHTML, description=null, notesHTML=null) {
  return {
    type: 'ADD_PATTERN',
    payload: {
      id,
      categoryId,
      name,
      exampleHTML,
      description,
      notesHTML
    },
  }
}

export function updatePattern(id, categoryId, name, exampleHTML, description, notesHTML) {
  return {
    type: 'UPDATE_PATTERN',
    payload: {
      id,
      categoryId,
      name,
      exampleHTML,
      description,
      notesHTML
    },
  }
}

export function deletePattern(id) {
  return { type: 'DELETE_PATTERN', payload: id}
}

const initState = {
  categories: [],
  fetching: false,
  fetched: false,
  loading: [],
  error: null,
};

export default function reducer(state=initState, action) {

    switch (action.type) {
      case "FETCH_CATEGORIES": {
        return {...state, fetching: true}
      }
      case "FETCH_CATEGORIES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CATEGORIES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          categories: action.payload,
        }
      }
      case "ADD_CATEGORY": {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        }
      }
      case "UPDATE_CATEGORY": {
        const { id } = action.payload
        const newCategories = [...state.categories]
        const categoryToUpdate = newCategories.findIndex(category => category.id === id)
        newCategories[categoryToUpdate] = action.payload;

        return {
          ...state,
          categories: newCategories,
        }
      }
      case "DELETE_CATEGORY": {
        return {
          ...state,
          categories: state.categories.filter(category => category.id !== action.payload),
        }
      }
      case "FETCH_PATTERN_FOR_CATEGORY": {
        const newLoading = [...state.loading, action.categoryId]

        return {
          ...state,
          loading: newLoading,
        }
      }
      case "FETCH_PATTERN_FOR_CATEGORY_FULFILLED": {
        const newLoading = state.loading.filter(id => id != action.categoryId)

        return {
          ...state,
          loading: newLoading,
        }
      }
    }

    return state
}

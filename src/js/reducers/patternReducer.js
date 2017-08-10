const initState = {
  patterns: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state=initState, action) {

    switch (action.type) {
      case "FETCH_PATTERN_FOR_CATEGORY": {
        return {...state, fetching: true}
      }
      case "FETCH_PATTERN_FOR_CATEGORY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PATTERN_FOR_CATEGORY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          patterns: action.payload,
        }
      }
      case "ADD_PATTERN": {
        return {
          ...state,
          patterns: [...state.patterns, action.payload],
        }
      }
      case "UPDATE_PATTERN": {
        const { id } = action.payload
        const newPatterns = [...state.patterns]
        const patternToUpdate = newPatterns.findIndex(pattern => pattern.id === id)
        newPatterns[patternToUpdate] = action.payload;

        return {
          ...state,
          patterns: newPatterns,
        }
      }
      case "DELETE_PATTERN": {
        return {
          ...state,
          patterns: state.patterns.filter(pattern => pattern.id !== action.payload),
        }
      }
    }

    return state
}

import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import category from "./categoryReducer"
import pattern from "./patternReducer"

export default combineReducers({
  category,
  pattern,
})

import { combineReducers } from "redux";
import { jogsReducer } from './reducers/jogsReducer'
import { authReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
  jogs: jogsReducer,
  user: authReducer
})

export default rootReducer
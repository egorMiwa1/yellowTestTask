import { combineReducers } from "redux";
import {tasksReducer} from './reducers/jogsReducer'

 const rootReducer = combineReducers({
  tasks:tasksReducer
})

export default rootReducer
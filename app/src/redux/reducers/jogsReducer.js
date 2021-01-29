import { GET_TASKS, UPDATE_TASK, DELETE_TASK, ADD_TASK, ADD_TASKS } from '../actions/jogsActions'

let initialState = {
  tasks: [],
  loading: false,
  totalCount:21
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: [...action.payload.tasks]
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      }
      case ADD_TASKS:
        return {
          ...state,
          tasks: action.payload.message.tasks,
          totalCoun: action.payload.message.total_task_count
        }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, i) => task.id === action.payload.id ? { ...action.payload } : { ...task })
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      }
    default:
      return state;
  }
};

import {api} from '../../api/api'

export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = "ADD_TASK"
export const ADD_TASKS = "ADD_TASKS"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"

// export function getTasks() {
//   return {
//     type : GET_TASKS
//   }
// }

export const getTasks = (pageNumber) => async (dispatch) => {
  let response = await api.getTasks(pageNumber);
  if (response && response.status === 200) {
    dispatch(addTasks(response.data));
  } else {
    console.log("Bad request");
  }
};

export function addTasks(data) {
  return {
    type : ADD_TASKS,
    payload : data
  }
}


export function addTask(data) {
  return {
    type : ADD_TASK,
    payload : data
  }
}

export function deleteTask(id) {
  return {
    type : DELETE_TASK,
    payload: id
  }
}

export function updateTask(data) {
  return {
    type :UPDATE_TASK,
    payload:data
  }
}


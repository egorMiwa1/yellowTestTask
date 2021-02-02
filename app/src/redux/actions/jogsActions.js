import { api } from '../../api/api'

export const SYNC_DATA = "GET_TASKS"
export const ADD_JOGS = "ADD_JOGS"
export const ADD_JOG = "ADD_JOG"
export const TOGGLE_FILTER = "TOGGLE_FILTER"
export const FILTER_BY_DATE = "FILTER_BY_DATE"
export const CLOSE_FILTER = "CLOSE_FILTER"

export const syncData = () => async (dispatch) => {
  let response = await api.syncData();
  if (response && response.status === 200) {
    dispatch(addJogs(response.data.response.jogs));
  } else {
    console.log("Bad request");
  }
};

export function addJogs(jogs) {
  return {
    type: ADD_JOGS,
    payload: jogs
  }
}

export function filterByDate(startDate, endDate) {
  return {
    type: FILTER_BY_DATE,
    payload: { startDate, endDate }
  }
}

export const addJog = (jog) => async (dispatch) => {
  let response = await api.addJog(jog.date,jog.time,jog.distance);
  if (response && response.status === 201) {
    console.log(response)
    return {
      type:ADD_JOG,
      payload:response.data
    }
  } else {
    console.log("Bad request");
  }
};  

export function toggleFilter() {
  return {
    type: TOGGLE_FILTER
  }
}


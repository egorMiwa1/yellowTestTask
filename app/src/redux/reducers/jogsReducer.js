import { TOGGLE_FILTER, ADD_JOGS, FILTER_BY_DATE, ADD_JOG } from '../actions/jogsActions'

let initialState = {
  jogsList: [],
  filteredJogList: [],
  isFilterOpen: false,
  loading: false,
};

export const jogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOGS:
      return {
        ...state,
        jogsList: [...action.payload],
        filteredJogList: [...action.payload]
      }
    case ADD_JOG:
      return {
        ...state,
        jogsList: [...state.jogsList, ...action.payload],
        filteredJogList: [...state.jogsList, ...action.payload]
      }
    case TOGGLE_FILTER:
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen,
        filteredJogList: [...state.jogsList]
      }
    case FILTER_BY_DATE:
      return {
        ...state,
        filteredJogList: state.jogsList.filter((jog) => jog.date >= action.payload.startDate && jog.date <= action.payload.endDate)
      }
    default:
      return state;
  }
};
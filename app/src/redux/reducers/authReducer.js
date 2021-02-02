import { SET_LOGGED, AUTH_USER } from '../actions/authActions'

let initialState = {
  isLogged:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        isLogged: action.payload
      }
    default:
      return state;
  }
};

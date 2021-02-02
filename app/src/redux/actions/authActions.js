import { api, setTokenForAPI } from '../../api/api'
import Cookies from "js-cookie";

export const SET_LOGGED = "SET_LOGGED"
export const AUTH_USER = "AUTH_USER"

export const login = (uuid) => async (dispatch) => {
  let response = await api.login(uuid);
  if (response && response.status === 201) {
    setTokenForAPI(response.data.response.access_token);
    Cookies.set("access-token", response.data.response.access_token);
    dispatch(authUser());
  } else {
    console.log("Bad request");
  }
};

export function setLogged(isLogged) {
  return {
    type: SET_LOGGED,
    payload: isLogged
  }
}

export const authUser = () => (dispatch) => {
  const token = Cookies.get("access-token");
  setTokenForAPI(token);
  if (token) {
    dispatch(setLogged(true));
  }
};  



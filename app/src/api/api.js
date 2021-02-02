import Axios from 'axios'
export let apiURL = "https://jogtracker.herokuapp.com/api/v1";

export const setTokenForAPI = (token) => {
  instance.defaults.headers.Authorization = "Bearer " + token;
};

const instance = Axios.create({
  baseURL: `${apiURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  login(uuid) {
    return instance
      .post(`${apiURL}/auth/uuidLogin`, {
        uuid,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err.response));
  },
  syncData() {
    return instance
      .get(`${apiURL}/data/sync`)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  },
  addJog(date, time, distance) {
    return instance
      .post(`${apiURL}/data/jog`, {
        distance,
        date,
        time
      })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err.response));
  }
}
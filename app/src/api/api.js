import Axios from 'axios'

export let apiURL = "https://uxcandy.com/~shapoval/test-task-backend/v2";
const developer = "developer=Egor";

const instance = Axios.create({
  baseURL: `${apiURL}`,
  headers: {
      "Content-Type": "application/json",
  },
});

export const api = {
  getTasks(page){
    return instance
    .get(`${apiURL}/?page=${page}&${developer}`)
    .then((response) => response)
    .catch((err) => console.log(err));
  }
}
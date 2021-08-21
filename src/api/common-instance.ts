import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
  }
})
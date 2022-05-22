import axios from "axios";

// const API = axios.create({ baseURL: "https://cwc-api.herokuapp.com/" });
const API = axios.create({
  baseURL: 'https://aee4-34-145-124-181.ngrok.io/'
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }

  return req;
});

/**
 * Authentication Routes
 */
export const signIn = (formData) => API.post("/api/user/signin", formData);
export const signUp = (formData) => API.post("/api/user/signup", formData);

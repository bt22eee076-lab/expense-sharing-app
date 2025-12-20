import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
  // example: "https://expense-sharing-backend.onrender.com/api"
});

export default API;

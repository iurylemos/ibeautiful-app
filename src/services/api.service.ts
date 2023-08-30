import axios from "axios";

const apiService = axios.create({
  baseURL: "http://177.37.248.122:8000",
});

export default apiService;

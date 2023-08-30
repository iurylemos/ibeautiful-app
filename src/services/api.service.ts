import axios from "axios";

const apiService = axios.create({
  baseURL: "http://192.168.1.101:8000",
});

export default apiService;

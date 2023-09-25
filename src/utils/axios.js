import axios from "axios";

const instance = axios.create({
  baseURL: "https://usnota-server.vercel.app/api/v1",
});

export default instance;

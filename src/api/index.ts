import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.jikan.moe/v4/anime",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

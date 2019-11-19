import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 0aa2b63ad6c5ffd0e0a5231fb100b8d5c097f997c39389eb5036e16228e7c357"
  }
});

import axios from "axios";

const instatnce = axios.create({
  baseURL: "http://localhost:5000",
});

export default instatnce;

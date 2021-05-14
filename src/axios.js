import axios from "axios";

const instatnce = axios.create({
  baseURL: process.env.APP_API_URL,
});

export default instatnce;

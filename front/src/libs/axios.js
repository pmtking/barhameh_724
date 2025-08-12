import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const REACT_USER_BASE_URL = "http://localhost:8000/api";
const Api = axios.create({
  baseURL: REACT_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    let _user = Cookies.get("user");

    if (_user) _user = JSON.parse(_user);
    if (_user?.token) config.headers.Authorization = `Bearer ${_user?.token}`;
    return config;
  },
  function (error) {
    toast.error("خطایی پیش امده است  لطفا مجددا تلاش نمایید.");
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    if (response?.data?.message) {
      toast.success(response.data.message);
      console.log("Success response:", response);
    }
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      location.replace("/");
    } else if (error?.response?.status === 422) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);

export default Api;

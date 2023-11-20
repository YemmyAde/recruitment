import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

http.interceptors.response.use(null!, (error: any) => {
  let errorMsg;
  const serverError =
    error.response &&
    error.response.status >= 500 &&
    error.response.status < 599;

  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 499;
  if (serverError) {
    errorMsg = "Server error";
  } else if (clientError) {
    errorMsg = error;
  } else if (error.message === "Network Error") {
    errorMsg = error.message;
  } else {
    errorMsg = error.message;
  }

  return Promise.reject(errorMsg);
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("recruitnToken");

    if (token) {
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// export function setJwt(jwt: string) {
//   http.defaults.headers.common["x-auth-token"] = jwt;
// }

export default http;

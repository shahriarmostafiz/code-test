// import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { getRefreshToken, getToken } from "../utilities/authDetails";
import axios from "axios";

const useAxiosSecure = () => {
  console.log("axiosSecure was accessed");
  const { auth, setAuth } = useAuth();
  const myToken = getToken();
  console.log(myToken);
  const api = axios.create({
    withCredentials: true,
  });

  useEffect(() => {
    // add a request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = myToken;

        console.log("sending token", authToken);
        config.headers.Authorization = `Bearer ${authToken}`;
        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    // add a response interceptor

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        // console.log(error)
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const cRefreshToken = auth?.refreshToken || getRefreshToken();
            const response = await axios.post(
              `http://localhost:3000/auth/refresh-token`,
              { refreshToken: cRefreshToken }
            );
            const token = response.data;
            console.log("New Token:", token);
            setAuth({
              ...auth,
              authToken: token.accessToken,
              refreshToken: token.refreshToken,
            });
            localStorage.setItem("authToken", token.accessToken);
            localStorage.setItem("refreshToken", token.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            // throw error;
            console.log(error);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, []);
  return { api };
};
export default useAxiosSecure;

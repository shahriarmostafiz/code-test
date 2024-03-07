import React from "react";
import useAuth from "./useAuth";
import { getRefreshToken, getToken } from "../utilities/authDetails";
// import axios from "axios";
//    const authToken = token?.accessToken
//                 const refreshToken = token?.refreshToken

//                 console.log(`Login time auth token ${authToken}`);
//                 localStorage.setItem("authToken", authToken)
//                 localStorage.setItem("refreshToken", refreshToken)

const myFetch = async (url, method, bodyInfo) => {
  //   const { auth, setAuth } = useAuth();

  const myToken = getToken();
  const cRefreshToken = getRefreshToken();

  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${myToken}`,
    },
  });
  const resData = await res.json();

  if (res.status === 401) {
    // const response = await fetch.post(
    //   `http://localhost:3000/auth/refresh-token`,
    //   { refreshToken: cRefreshToken }
    // );
    const tokenRes = await fetch("http://localhost:3000/auth/refresh-token", {
      method: "POST",
      body: { refreshToken: cRefreshToken },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = await tokenRes.json();
    // setAuth({
    //   ...auth,
    //   authToken: token.accessToken,
    //   refreshToken: token.refreshToken,
    // });
    localStorage.setItem("authToken", token.accessToken);
    localStorage.setItem("refreshToken", token.refreshToken);
    const resAgain = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const finalData = await resAgain.json();
    return finalData;
  }
  return resData;
};

export default myFetch;

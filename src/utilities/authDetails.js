// localStorage.setItem("authToken", authToken);
// localStorage.setItem("refreshToken", refreshToken);
// localStorage.setItem("user", JSON.stringify(user));

export const getToken = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    return token;
  }
};
export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    return refreshToken;
  }
};
export const getUser = () => {
  const userString = localStorage.getItem("user");
  if (userString) {
    const user = JSON.parse(userString);
    return user;
  }
};

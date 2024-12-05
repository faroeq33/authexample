import { decodeJwt } from "jose";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    console.warn("No token found");
    return null;
  }
  return token;
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiresIn");
};

const setAuthExpiresIn = (token: string) => {
  if (token === null) return null;
  // Get expiry time from token using jwt-decode
  const expiresIn = decodeJwt(token).exp as number;
  const expiresInMs = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem("expiresIn", expiresInMs.toString());
};

const getAuthExpiresIn = () => {
  const expiresIn = localStorage.getItem("expiresIn");
  return expiresIn ? parseInt(expiresIn) : null;
};

const loggedIn = () => localStorage.getItem("accessToken") !== null;

export { loggedIn, getAuthToken, logout, setAuthExpiresIn, getAuthExpiresIn };

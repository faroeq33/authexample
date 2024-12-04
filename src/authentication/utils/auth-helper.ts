import { decodeJwt } from "jose";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    console.warn("No token found");
    return null;
  }
  return token;
};

const setAuthToken = (token: string) => {
  localStorage.setItem("token", token);
};

const setAuthRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token);
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiresIn");
};

// const getTokenBearer = () => {
//   const token = getAuthToken();
//   return token ? `Bearer ${token}` : "";
// };

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

const loggedIn = () => localStorage.getItem("token") !== null;

const getAuthHelperMethods = () => {
  return {
    getAuthToken,
    setAuthToken,
    setAuthRefreshToken,
    logout,
    setAuthExpiresIn,
    getAuthExpiresIn,
  };
};

export {
  loggedIn,
  getAuthToken,
  setAuthToken,
  setAuthRefreshToken,
  logout,
  setAuthExpiresIn,
  getAuthExpiresIn,
  getAuthHelperMethods,
};

import { decodeJwt } from "jose";
import { Token } from "./AuthContext";

export const AuthContextValues = (
  token: Token
  // setToken: Dispatch<SetStateAction<Token>>
) => {
  return {
    getAuthToken: () => {
      const token = localStorage.getItem("token");
      if (token === null) {
        console.warn("No token found");
        return null;
      }
      // setToken(token);
      return token;
    },
    setAuthToken: (token: string) => {
      localStorage.setItem("token", token);
      // setToken(token);
    },
    setAuthRefreshToken: (token: string) => {
      localStorage.setItem("refreshToken", token);
      // setToken(token);
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    },
    getTokenBearer: () => {
      return token ? `Bearer ${token}` : "";
    },
    setAuthExpiresIn: (token: Token) => {
      if (token === null) return null;
      // Get expirytime from token using jwt-decode
      const expiresIn = decodeJwt(token).exp as number;
      const expiresInMs = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem("expiresIn", expiresInMs.toString());
      // setExpiresIn(expiresInMs);
    },
    getAuthExpiresIn: () => {
      const expiresIn = localStorage.getItem("expiresIn");
      // setAuthExpiresIn(expiresIn ? parseInt(expiresIn) : null);
      return expiresIn;
    },
  };
};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthContextType {
  token: string | null;
  expiresIn: number | null;
  getToken: () => string | null;
  getTokenBearer: () => string;
  authToken: (token: string) => void;
  Logout: () => void;
  /*
  	// Expires in not implemented in backend
     setToken: React.Dispatch<React.SetStateAction<string | null>>;
     setExpiresIn: React.Dispatch<React.SetStateAction<number | null>>; Todo: implement experes in with jwt lib
     getExpiresIn: () => string | null;
     authExpiresIn: (expiresIn: number) => void;
  */
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [expiresIn, setExpiresIn] = useState<number | null>(null);

  const authToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    setToken(token);
    return token;
  };

  const getTokenBearer = () => {
    return token ? `Bearer ${token}` : "";
  };

  // TODO: Reimplmement expiry with jwt lib
  const authExpiresIn = (expiresIn: number) => {
    const expiresInMs = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem("expiresIn", expiresInMs.toString());
    setExpiresIn(expiresInMs);
  };

  const getExpiresIn = () => {
    const expiresIn = localStorage.getItem("expiresIn");
    setExpiresIn(expiresIn ? parseInt(expiresIn) : null);
    return expiresIn;
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    setToken(null);
    setExpiresIn(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        expiresIn,
        getToken,
        authToken,
        Logout,
        getTokenBearer,
        // authExpiresIn,// not implemented in backend
        // getExpiresIn, // not implemented in backend
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export function useRequireAuth(redirectUrl = "/login") {
  // This hook can be viewed as a middleware that checks if the user is authenticated
  const navigate = useNavigate();
  const { getToken, getExpiresIn } = useAuth();

  useEffect(() => {
    const expiresIn = getExpiresIn();
    const isTokenExpired = expiresIn
      ? new Date().getTime() > new Date(Number(expiresIn)).getTime()
      : true;
    const token = getToken();

    if (!token || isTokenExpired) {
      navigate(redirectUrl);
      console.log("Redirecting to login not authenticated");
    }
  }, [getToken, navigate, redirectUrl, getExpiresIn]);
}

import React, { useState } from "react";

interface AuthContextType {
  token: string | null;
  //   setToken: React.Dispatch<React.SetStateAction<string | null>>;
  expiresIn: number | null;
  //   setExpiresIn: React.Dispatch<React.SetStateAction<number | null>>;
  getExpiresIn: () => string | null;
  getToken: () => string | null;
  getTokenBearer: () => string;
  authToken: (token: string) => void;
  authExpiresIn: (expiresIn: number) => void;
  Logout: () => void;
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

  const authExpiresIn = (expiresIn: number) => {
    const expiresInMs = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem("expiresIn", expiresInMs.toString());
    setExpiresIn(expiresInMs);
  };
  const getToken = () => {
    const token = localStorage.getItem("token");
    setToken(token);
    return token;
  };

  const getTokenBearer = () => {
    return token ? `Bearer ${token}` : "";
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
        getExpiresIn,
        getToken,
        authToken,
        authExpiresIn,
        Logout,
        getTokenBearer,
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

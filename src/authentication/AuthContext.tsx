import React, {
  createContext,
  // Dispatch,
  FC,
  // SetStateAction,
  useState,
} from "react";

import { AuthContextValues } from "./AuthContextValues";

export type Token = string | null;

type AuthContextType = ReturnType<typeof AuthContextValues>; // This way i don't have to rename the type when changing the any function in AuthContextValues

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token] = useState<Token>(null);
  // const [expiresIn, setExpiresIn] = useState<number | null>(null);

  return (
    <AuthContext.Provider
      value={{
        ...AuthContextValues(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

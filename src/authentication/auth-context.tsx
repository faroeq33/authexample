import { createContext } from "react";
import { getAuthHelperMethods } from "./utils/auth-helper";

export type AuthContextType = ReturnType<typeof getAuthHelperMethods>; // This way i don't have to rename the type when changing the any function in AuthContextValues

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

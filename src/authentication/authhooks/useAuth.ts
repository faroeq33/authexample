import { useContext } from "react";
import { AuthContext } from "../auth-context";

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides access to the authentication context, allowing you to
 * retrieve the current authentication state and any related functions.
 *
 * @throws {Error} If the hook is used outside of an AuthProvider.
 *
 * @returns {AuthContextType} The current authentication context value.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

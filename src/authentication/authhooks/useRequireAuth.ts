import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { ROUTES } from "../../globals/globals";

/**
 * Custom hook that ensures the user is authenticated. If the user is not authenticated,
 * they will be redirected to the specified login page.
 *
 * @param {string} [redirectUrl="/unauthorized"] - The URL to redirect to if the user is not authenticated.
 *
 * @returns {void}
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   useRequireAuth();
 *   return <div>Protected Content</div>;
 * };
 * ```
 */
function useRequireAuth(redirectUrl = ROUTES.unauthorized.path) {
  const navigate = useNavigate();
  const authHandler = useAuth();

  useEffect(() => {
    const expiresIn = authHandler.getAuthExpiresIn();
    const tokenExpired = isTokenExpired(expiresIn);

    const token = authHandler.getAuthToken();

    // If there is no token or the token has expired, redirect to the login page
    if (!token || tokenExpired) {
      navigate(redirectUrl);
      console.log("Redirecting to login not authenticated");
    }
  }, [authHandler, navigate, redirectUrl]);
}

/**
 * Checks if the provided token expiration time has passed.
 *
 * @param expiresIn - The expiration time of the token as a string or null.
 * @returns `true` if the token is expired or if `expiresIn` is null, otherwise `false`.
 */
const isTokenExpired = (expiresIn: string | null) => {
  return expiresIn
    ? new Date().getTime() > new Date(Number(expiresIn)).getTime()
    : true;
};

export default useRequireAuth;
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

/**
 * Custom hook that ensures the user is authenticated. If the user is not authenticated,
 * they will be redirected to the specified login page.
 *
 * @param {string} [redirectUrl="/login"] - The URL to redirect to if the user is not authenticated.
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
function useRequireAuth(redirectUrl = "/login") {
  const navigate = useNavigate();
  const authHandler = useAuth();

  useEffect(() => {
    const expiresIn = authHandler.getAuthExpiresIn();
    const isTokenExpired = expiresIn
      ? new Date().getTime() > new Date(Number(expiresIn)).getTime()
      : true;

    const token = authHandler.getAuthToken();

    // If there is no token or the token has expired, redirect to the login page
    if (!token || isTokenExpired) {
      navigate(redirectUrl);
      console.log("Redirecting to login not authenticated");
    }
  }, [
    navigate,
    redirectUrl,
    authHandler.getAuthToken(),
    authHandler.getAuthExpiresIn(),
  ]);
}
export default useRequireAuth;

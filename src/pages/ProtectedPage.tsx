import { useAuth } from "../authentication/authhooks/useAuth";
import useRequireAuth from "../authentication/authhooks/useRequireAuth";

function ProtectedPage() {
  useRequireAuth(); // Add this line to require authentication

  const authHandler = useAuth();

  return (
    <>
      {"CurrentToken:" + JSON.stringify(authHandler.getAuthToken())}
      <h1>Protected Page</h1>
      <p>
        Super secret protected information page. If you've arrived here the
        application works
      </p>
    </>
  );
}

export default ProtectedPage;

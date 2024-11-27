import { useAuth } from "../authentication/AuthHooks/useAuth";

function ProtectedPage() {
  const authHandler = useAuth();
  console.log(authHandler.getAuthToken());
  // return (  );
  return "";
}

export default ProtectedPage;

import useRequireAuth from "../authentication/authhooks/useRequireAuth";

function ProtectedPage() {
  useRequireAuth(); // Add this line to require authentication

  return (
    <>
      <h1>Protected Page</h1>
      <p>
        Super secret protected information page. If you've arrived here the
        application works
      </p>
    </>
  );
}

export default ProtectedPage;

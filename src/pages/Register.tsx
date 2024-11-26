import { CSSProperties } from "react";
import { Link } from "react-router";

function RegisterPage() {
  return (
    <>
      <h1>Registerpage</h1>

      <form action="somewhere">
        <div style={formstyles}>
          <input type="text" name="username" placeholder="Username123" />
          <input type="password" name="password" />
        </div>
      </form>

      <Link to={"/home"}>Back to Home</Link>
    </>
  );
}

const formstyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  margin: "1rem",
};
export default RegisterPage;

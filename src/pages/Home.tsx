import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/register">Signup/Register</Link>
    </>
  );
}

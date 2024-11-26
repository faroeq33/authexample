import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <h1 className="text-red-800">Homepage</h1>
      <Link to="/register">Signup/Register</Link>
    </>
  );
}

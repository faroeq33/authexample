import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/register">Signup/Register</Link>
    </>
  );
}

export default HomePage;

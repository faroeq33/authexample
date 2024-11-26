import { Link } from "react-router";
import H1 from "../ui/H1";

export default function HomePage() {
  return (
    <>
      <H1>Homepage</H1>
      <Link to="/register">Signup/Register</Link>
    </>
  );
}

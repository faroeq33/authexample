import { Link } from "react-router";
import H1 from "../ui/H1";
import LinkStyle from "../ui/LinkStyle";

export default function Unauthorized() {
  return (
    <>
      <H1>
        Unauthorized,{" "}
        <Link to="/login">
          <LinkStyle>Sign in </LinkStyle>
        </Link>
        to see this route
      </H1>
    </>
  );
}

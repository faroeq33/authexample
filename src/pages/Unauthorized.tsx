import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          You're not authorized to see this page <br />
          <Link to="/login" className="text-2xl">
            <span className="text-2xl text-blue-500">Sign in </span>
            to see this route
          </Link>
        </h1>
      </div>
    </>
  );
}

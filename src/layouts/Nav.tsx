import { Link } from "react-router";
import { ROUTES } from "../router/CustomRouter";

function Nav() {
  const fields = [
    {
      name: "Home",
      path: ROUTES.home,
    },
    {
      name: "register",
      path: ROUTES.register,
    },
    {
      name: "login",
      path: ROUTES.login,
    },
    {
      name: "logout",
      path: ROUTES.logout,
    },
    {
      name: "protected",
      path: ROUTES.logout,
    },
  ];
  return (
    <nav>
      <ul className="flex gap-4">
        {fields.map((field, index) => (
          <li key={index}>
            <Link to={field.path}>{field.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

import { Link } from "react-router";
import { ROUTES } from "../router/CustomRouter";
import { useAuth } from "../authentication/AuthHooks/useAuth";
import { PropsWithChildren } from "react";

function Nav() {
  const authHandler = useAuth();

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
      <ul className="flex items-center justify-center gap-4">
        {fields.map((field, index) => (
          <NavItem key={index}>
            <Link to={field.path}>{field.name}</Link>
          </NavItem>
        ))}

        <NavItem>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => authHandler.logout()}
          >
            Logout!
          </button>
        </NavItem>
      </ul>
    </nav>
  );
}

const NavItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="p-2 capitalize rounded-md bg-slate-100 hover:underline">
      {children}
    </li>
  );
};

export default Nav;

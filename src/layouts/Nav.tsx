import { Link } from "react-router";
import { useAuth } from "../authentication/AuthHooks/useAuth";
import { PropsWithChildren } from "react";
import { ROUTES } from "../globals/globals";

function Nav() {
  const authHandler = useAuth();

  const menuItems = [
    ROUTES.home,
    ROUTES.register,
    ROUTES.login,
    ROUTES.logout,
    ROUTES.protected,
    ROUTES.unauthorized,
  ];

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">
        {menuItems.map(({ path, name }, index) => (
          <Link to={path} key={index}>
            <NavItem>{name}</NavItem>
          </Link>
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

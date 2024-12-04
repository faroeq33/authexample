import { Link } from "react-router";
import { PropsWithChildren, useState } from "react";
import { ROUTES } from "../globals/globals";
import { useAuth } from "@/authentication/authhooks/useAuth";
import { loggedIn } from "@/authentication/utils/auth-helper";

function Nav() {
  const authRoutes = [
    ROUTES.home,
    ROUTES.register,
    ROUTES.login,
    ROUTES.protected,
  ];

  const guestRoutes = [ROUTES.home, ROUTES.register, ROUTES.login];

  const authHandler = useAuth();
  const defaultState = loggedIn() ? authRoutes : guestRoutes;
  const [routes, setRoutes] = useState(defaultState);

  const handleLogout = () => {
    authHandler.logout();
    setRoutes(authRoutes);
  };

  return (
    <nav className="w-full py-4 bg-blue-200">
      <ul className="flex items-center justify-center gap-4 text-2xl">
        {routes.map(({ path, name }, index) => (
          <Link to={path} key={index}>
            <NavItem>{name}</NavItem>
          </Link>
        ))}

        {loggedIn() && (
          <NavItem>
            <button
              className="text-blue-500 hover:underline"
              onClick={handleLogout}
            >
              Logout!
            </button>
          </NavItem>
        )}
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

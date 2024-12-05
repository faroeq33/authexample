/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router";
import { PropsWithChildren } from "react";
import { guestRoutes, ROUTES } from "../globals/globals";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  refreshTokenAtom,
  routesAtom,
} from "@/authentication/atoms";

function Nav() {
  const [aToken, setAccToken] = useAtom(accessTokenAtom);
  const [rToken, setRefrToken] = useAtom(refreshTokenAtom);
  const [routes, setRoutes] = useAtom(routesAtom);

  const handleLogout = () => {
    setAccToken("");
    setRefrToken("");
    setRoutes(guestRoutes);
  };

  return (
    <nav className="w-full py-4 bg-blue-200">
      <ul className="flex items-center justify-center gap-4 text-2xl">
        {routes.map(({ path, name }, index) => (
          <span key={index}>
            {name == ROUTES.logout.name ? (
              <NavItem>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleLogout}
                >
                  Logout!
                </button>
              </NavItem>
            ) : (
              <Link to={path}>
                <NavItem>{name}</NavItem>
              </Link>
            )}
          </span>
        ))}
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

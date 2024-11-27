import { Outlet } from "react-router";
import Nav from "./Nav";
import H1 from "../ui/H1";

function Layout() {
  return (
    <>
      <header>
        <H1>Auth Example App</H1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

import { Outlet } from "react-router";
import Nav from "./Nav";
import H1 from "../ui/H1";

function Layout() {
  return (
    <>
      <header>
        <div className="p-4">
          <H1>Auth Example App</H1>
        </div>
        <div className="flex gap-4">
          <Nav />
        </div>
      </header>
      <div className="flex flex-col items-center justify-center h-screen space-y-8 font-custom">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;

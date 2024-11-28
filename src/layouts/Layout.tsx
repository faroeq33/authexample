import { Outlet } from "react-router";
import Nav from "./Nav";
import H1 from "../ui/H1";
import Spacer from "../ui/Spacer";

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
      <div className="container pt-4 mx-auto">
        <div className="flex justify-center w-full h-screen space-y-8 font-custom">
          <main className="w-full ">
            <Spacer>
              <Outlet />
            </Spacer>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;

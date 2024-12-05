import { Outlet } from "react-router";
import H1 from "../ui/H1";
import Spacer from "../ui/Spacer";
import TokenMonitor from "@/authentication/tokenmonitor";
import Nav from "./Nav";

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
            {process.env.NODE_ENV !== "production" ? <TokenMonitor /> : null}
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

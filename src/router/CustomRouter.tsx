import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ProtectedPage from "../pages/ProtectedPage";
import Layout from "../layouts/Layout";
import LogoutPage from "../pages/Logout";

export const ROUTES = {
  home: "/",
  register: "/register",
  login: "/login",
  logout: "/logout",
  protected: "/protected",
};

export default function CustomRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.register} element={<RegisterPage />} />
            <Route path={ROUTES.login} element={<LoginPage />} />
            <Route path={ROUTES.logout} element={<LogoutPage />} />
            <Route path={ROUTES.protected} element={<ProtectedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

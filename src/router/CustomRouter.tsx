import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ProtectedPage from "../pages/ProtectedPage";
import Layout from "../layouts/Layout";
import LogoutPage from "../pages/Logout";
import { ROUTES } from "../globals/globals";
import Unauthorized from "../pages/Unauthorized";

export default function CustomRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={ROUTES.home.path} element={<HomePage />} />
            <Route path={ROUTES.register.path} element={<RegisterPage />} />
            <Route path={ROUTES.login.path} element={<LoginPage />} />
            <Route path={ROUTES.logout.path} element={<LogoutPage />} />
            <Route path={ROUTES.protected.path} element={<ProtectedPage />} />
            <Route path={ROUTES.unauthorized.path} element={<Unauthorized />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

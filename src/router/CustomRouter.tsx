import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";

function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;

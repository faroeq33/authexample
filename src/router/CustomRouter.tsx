import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ProtectedPage from "../pages/ProtectedPage";

export default function CustomRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/protectedpage" element={<ProtectedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

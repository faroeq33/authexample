import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomRouter from "./router/CustomRouter.tsx";
import "./globals/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomRouter />
  </StrictMode>
);

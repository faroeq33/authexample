import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomRouter from "./router/CustomRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomRouter />
  </StrictMode>
);

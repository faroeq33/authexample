import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomRouter from "./router/CustomRouter.tsx";
import "./globals/globals.css";
import Providers from "./providers/ContextProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <CustomRouter />
    </Providers>
  </StrictMode>
);

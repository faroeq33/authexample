import { PropsWithChildren } from "react";
import { AuthProvider } from "../context/AuthContext";

// This component is a wrapper for all the providers in the app
export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}

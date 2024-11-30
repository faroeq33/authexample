import AuthProvider from "@/authentication/auth-provider";
import { PropsWithChildren } from "react";

// This component is a wrapper for all the providers in the app
export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}

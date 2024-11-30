import { useState } from "react";
import { Token } from "./auth-types";
import { AuthContext } from "./auth-context";
import { getAuthHelperMethods } from "./utils/auth-helper";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token] = useState<Token>(null);
  // const [expiresIn, setExpiresIn] = useState<number | null>(null);
  return (
    <AuthContext.Provider
      value={{
        ...getAuthHelperMethods(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

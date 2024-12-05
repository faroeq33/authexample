import { authRoutes, guestRoutes } from "@/globals/globals";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { loggedIn } from "./auth-utils";

// Authentication _________________________________________________________
export const accessTokenAtom = atomWithStorage<string | null>(
  "accessToken",
  null
);
export const refreshTokenAtom = atomWithStorage<string | null>(
  "refreshToken",
  null
);

// Routing ________________________________________________________________
const defaultState = loggedIn() ? authRoutes : guestRoutes;
export const routesAtom = atom(defaultState);

// Example ________________________________________________________________
/* How to use this atom in a component:

export const UserComponent = () => {
  const [thing, setThing] = useAtom(accessToken);
  return (
    <div>
      {thing}
      <button
        onClick={() => setThing("realtoken")}
        className="px-2 py-1 border-2 rounded-lg bg-stone-400 border-stone-500"
      >
        Get Token
      </button>
    </div>
  );
};

*/

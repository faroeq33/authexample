import { useAtom } from "jotai";
import { accessTokenAtom, refreshTokenAtom } from "./atoms";

function TokenMonitor() {
  const [aToken] = useAtom(accessTokenAtom);
  const [rToken] = useAtom(refreshTokenAtom);
  return (
    <div className="fixed w-1/2 p-4 bottom-4 right-4 bg-stone-200 border-rou">
      <div>
        <div>
          <div className="text-4xl">All Local Storage Items:</div>
          <ul className="w-full text-2xl ">
            <li>
              <span className="font-bold">AccessToken: </span>
              <span className="text-right">{aToken}</span>
            </li>
            <li>
              <span className="font-bold">RefreshToken: </span>
              <span className="text-right">{rToken}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TokenMonitor;

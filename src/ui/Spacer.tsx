import { PropsWithChildren } from "react";

function Spacer({ children }: PropsWithChildren) {
  return <div className="gap-4 m-4">{children}</div>;
}

export default Spacer;

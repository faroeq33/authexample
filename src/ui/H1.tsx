import { PropsWithChildren } from "react";

function H1({ children }: PropsWithChildren) {
  return <h1 className="text-3xl font-bold">{children}</h1>;
}

export default H1;

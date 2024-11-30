import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren) {
  return <h1 className="text-3xl font-bold text-left">{children}</h1>;
}

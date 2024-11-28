import { PropsWithChildren } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
  return <span className="text-red-500">{children}</span>;
}

export default ErrorMessage;

import { PropsWithChildren } from "react";

function LinkStyle({ children }: PropsWithChildren) {
  return (
    <span className="text-blue-500 cursor-pointer hover:underline">
      {children}
    </span>
  );
}

export default LinkStyle;

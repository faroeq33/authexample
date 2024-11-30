import { ReactNode } from "react";

type CumstomFormProps = {
  children: ReactNode;
  onSubmit: () => void;
};

function CustomForm({ children, ...props }: CumstomFormProps) {
  return (
    <form
      className="flex flex-col w-full space-y-4"
      autoComplete="on"
      {...props}
    >
      {children}
    </form>
  );
}
export default CustomForm;

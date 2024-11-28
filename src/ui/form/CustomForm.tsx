// used `any` because the extra typesafety is not needed for this example
function CustomForm({ children, ...props }: any) {
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

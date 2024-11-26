import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

type FormValues = {
  email: string;
  password: string;
  apiError?: {
    message: string;
  };
};

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });
  const navigate = useNavigate();
  const { authToken, authExpiresIn } = useAuth();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data
      );

      if (response.data.token) {
        authToken(response.data.token);
        authExpiresIn(response.data.expiresIn);
        navigate("/home");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.data == "Incorrect email or password") {
          console.log("Incorrect email or password");
          setError("root.apiError", { message: "Incorrect email or password" });
        }

        if (error.response?.data == "Incorrect password") {
          console.log("Incorrect password");
          setError("password", { message: "Incorrect password" });
        }
      }
    }
  };

  const isErrorIncorrectEmailOrPassword = errors.root?.apiError
    ? "border-red-300 "
    : "border-gray-300";

  const isErrorStyleEmail = errors.email
    ? "border-red-300 "
    : "border-gray-300";
  const isErrorStylePassword = errors.password
    ? "border-red-300 "
    : "border-gray-300";

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 font-custom">
      <span className="text-2xl text-gray-700">Login</span>
      {errors.root?.apiError && (
        <p className="text-red-500">{errors.root?.apiError.message}</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="E-mail"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStyleEmail} ${isErrorIncorrectEmailOrPassword}`}
        />

        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <input
          autoComplete="current-password"
          id="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "Wachtwoord is verplicht" },
          })}
          placeholder="Wachtwoord"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStylePassword} ${isErrorIncorrectEmailOrPassword}`}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <button
          type="submit"
          className="text-lg text-white bg-blue-500 w-72 h-14 rounded-custom hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div>
        Nog geen account?
        <Link to="/register">
          <span className="text-blue-500 cursor-pointer hover:underline">
            Registeer hier
          </span>
        </Link>
      </div>
    </div>
  );
}

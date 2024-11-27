import axios from "axios";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router";
import { useAuth } from "../authentication/AuthHooks/useAuth";
import globals from "../globals/globals";
import { useState } from "react";

export default function Login() {
  const [formstatus, setFormStatus] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginRequest>({ mode: "onSubmit" });

  const navigate = useNavigate();
  const authHandler = useAuth();

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${globals.API_URL}/auth/login`,
        data
      );

      if (response.data.token) {
        authHandler.setAuthToken(response.data.token);
        authHandler.setAuthRefreshToken(response.data.refreshToken);
        authHandler.setAuthExpiresIn(response.data.token);
        console.log("Login successful");
        setFormStatus("success");
        navigate("/home");
      }
    } catch (error: unknown) {
      console.error(error);

      setError("root.apiError", {
        message:
          "Something went wrong, please try again later. See console.log for more details",
      });
    }
  };

  const isErrorIncorrectEmailOrPassword = errors.root?.apiError
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
          autoComplete="current-password"
          type="text"
          {...register("username", {
            required: { value: true, message: "Wachtwoord is verplicht" },
          })}
          placeholder="Username"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStylePassword} ${isErrorIncorrectEmailOrPassword}`}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
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
      <div className="flex flex-col">
        <span>Nog geen account? </span>
        <Link to="/register">
          <span className="text-blue-500 cursor-pointer hover:underline">
            Registeer hier
          </span>
        </Link>
      </div>
    </div>
  );
}

type LoginRequest = {
  username: string;
  password: string;
  apiError?: {
    message: string;
  };
};

type LoginResponse = {
  token: string;
  refreshToken: string;
};

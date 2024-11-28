import axios from "axios";
import { useForm } from "react-hook-form";

import { Link } from "react-router";
import { useAuth } from "../authentication/AuthHooks/useAuth";
import { API_URL } from "../globals/globals";
import { useState } from "react";
import LinkStyle from "../ui/LinkStyle";
import H1 from "../ui/H1";
import CustomForm from "../ui/form/CustomForm";
import ErrorMessage from "../ui/messages/ErrorMessage";

export default function Login() {
  const [formstatus, setFormStatus] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginRequest>({ mode: "onSubmit" });

  const authHandler = useAuth();

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${API_URL}/auth/login`,
        data
      );

      // If the response does not contain a token, set an error
      if (!response.data.token) {
        setError("root.apiError", {
          message: "Login failed, no token received",
        });
        return;
      }

      // Set the token and refresh token in the auth handler
      authHandler.setAuthToken(response.data.token);
      authHandler.setAuthRefreshToken(response.data.refreshToken);
      authHandler.setAuthExpiresIn(response.data.token);

      console.log("Login successful");
      setFormStatus("success");
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
    <>
      {errors.root?.apiError && (
        <p className="text-red-500">{errors.root?.apiError.message}</p>
      )}
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {formstatus && (
          <span className="text-green-500">
            Login successfull, go to a protected route in order to see if it
            works
          </span>
        )}
        <H1>Login</H1>

        <input
          id="username"
          autoComplete="username"
          type="text"
          {...register("username", {
            required: { value: true, message: "*" },
          })}
          placeholder="Username"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStylePassword} ${isErrorIncorrectEmailOrPassword}`}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <input
          autoComplete="current-password"
          id="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "Wachtwoord is verplicht" },
          })}
          placeholder="Wachtwoord"
          className={`w-72 h-12 px-4 text-lg border-2 rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStylePassword} ${isErrorIncorrectEmailOrPassword}`}
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
      </CustomForm>
      <div className="flex flex-col mt-2">
        <span className="text-gray-700">Nog geen account? </span>
        <Link to="/register">
          <LinkStyle>Registeer hier</LinkStyle>
        </Link>
      </div>
    </>
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

import { CSSProperties } from "react";
import { Link, useNavigate } from "react-router";

import axios from "axios";
import { useForm } from "react-hook-form";
import H1 from "../ui/H1";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        data
      );
      console.log(response.status);
      if (response.status === 201) {
        console.log("Succesvol geregistreerd");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.apiError", {
        message: "Er is een netwerkfout opgetreden. Probeer het later opnieuw.",
      });
    }
  };

  return (
    <div style={formstyles}>
      <H1>Registeren</H1>
      <div>
        <div>
          {errors.root?.apiError && <p>{errors.root?.apiError.message}</p>}

          {isSubmitting && <span>Bezig met registreren...</span>}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <input
          className="border"
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="Naam"
        />

        <div>{errors.username && <span>Naam is verplicht</span>}</div>
        <input
          className="border"
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="E-mail"
        />

        <div>
          {errors.email && (
            <span className="text-red-500">Email is verplicht</span>
          )}
        </div>

        <input
          className="border"
          autoComplete="new-password"
          id="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "wachtwoord is verplicht" },
          })}
          placeholder="Wachtwoord"
        />
        <div>{errors.password && <span>Wachtwoord is verplicht</span>}</div>
        <button
          type="submit"
          className="text-lg text-white bg-blue-500 w-72 h-14 rounded-custom hover:bg-blue-600"
        >
          Registeer
        </button>
      </form>
      <div>
        Al een account?{" "}
        <Link to="/login">
          <span className="text-blue-500 cursor-pointer hover:underline">
            Log hier in
          </span>
        </Link>
      </div>
    </div>
  );
}

const formstyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  margin: "1rem",
};

type FormValues = {
  username: string;
  email: string;
  password: string;
  apiError?: {
    message: string;
  };
};

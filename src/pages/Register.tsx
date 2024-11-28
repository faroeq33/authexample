import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { API_URL } from "../globals/globals";
import H1 from "../ui/H1";
import LinkStyle from "../ui/LinkStyle";
import CustomForm from "../ui/form/CustomForm";
import ErrorMessage from "../ui/messages/ErrorMessage";

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
      const response = await axios.post(`${API_URL}/auth/register`, data);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        console.log("Succesvol geregistreerd");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.apiError", {
        message: `${error}`,
      });
    }
  };

  return (
    <>
      <div>
        <div>
          {errors.root?.apiError && <p>{errors.root?.apiError.message}</p>}

          {isSubmitting && <span>Bezig met registreren...</span>}
        </div>
      </div>

      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <H1>Registeren</H1>

        <input
          className="h-12 px-4 text-lg border-2 w-72 rounded-custom focus:outline-none focus:border-blue-500"
          autoComplete="role"
          type="text"
          {...register("role", {
            required: { value: true, message: "Rol is verplicht" },
          })}
          placeholder="TeamHr"
        />
        {errors.username && <span>{errors.username?.message}</span>}

        <input
          className="h-12 px-4 text-lg border-2 w-72 rounded-custom focus:outline-none focus:border-blue-500"
          type="text"
          autoComplete="username"
          id="username"
          {...register("username", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="Naam"
        />

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <input
          className="h-12 px-4 text-lg border-2 w-72 rounded-custom focus:outline-none focus:border-blue-500"
          type="email"
          autoComplete="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="E-mail"
        />

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <input
          className="h-12 px-4 text-lg border-2 w-72 rounded-custom focus:outline-none focus:border-blue-500"
          autoComplete="current-password"
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
      </CustomForm>
      <div className="mt-2">
        Al een account?{" "}
        <Link to="/login">
          <LinkStyle>Log hier in</LinkStyle>
        </Link>
      </div>
    </>
  );
}

type FormValues = {
  role: string;
  username: string;
  email: string;
  password: string;
  apiError?: {
    message: string;
  };
};

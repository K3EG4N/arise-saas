import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Input } from "@/components/ui/Input";
import { GoogleSingUp } from "@/components/webeo/GoogleSingUp";
import { MicrosoftSingUp } from "@/components/webeo/MicrosoftSingUp";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleLoginClick, setRequest } = useLogin();

  return (
    <section className="h-full flex ">
      <article className="w-[45%] flex flex-col justify-center items-center gap-4 px-48">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-pretty text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, earum.
          Dicta quo saepe iusto, mollitia enim repudiandae{" "}
        </p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full justify-center items-center gap-2.5 text-sm">
            <GoogleSingUp />
            <MicrosoftSingUp />
          </div>
          <Divider label="or sing up with" />
          <Input
            title="E-Mail"
            placeholder="Your email address"
            onChange={(value) =>
              setRequest((prev) => ({ ...prev, email: value }))
            }
            // field="Your email is incorrect"
          />
          <Input
            title="Password"
            placeholder="Your password"
            type="password"
            onChange={(value) =>
              setRequest((prev) => ({ ...prev, password: value }))
            }
            // field="Your password is incorrect"
          />
          <Button
            label="Iniciar Sesión"
            isLoading={loading}
            onClick={() => handleLoginClick()}
            // appareance="ghost"
          />
          {/* <button
            type="submit"
            className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition"
          >
            Iniciar Sesión
          </button> */}
        </div>
      </article>
      <figure className="w-full flex-1 rounded overflow-hidden">
        <img
          draggable={false}
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/4726054/pexels-photo-4726054.jpeg?cs=srgb&dl=pexels-joaodelicado-4726054.jpg&fm=jpg"
          alt=""
        />
      </figure>
    </section>
  );
};

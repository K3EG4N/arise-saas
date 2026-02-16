import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Input } from "@/components/ui/Input";
import { GoogleSingUp } from "@/components/webeo/GoogleSingUp";
import { MicrosoftSingUp } from "@/components/webeo/MicrosoftSingUp";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleLoginClick, errors, setRequest } = useLogin();

  return (
    <section className="flex h-full">
      <article className="flex w-[45%] flex-col items-center justify-center gap-4 px-48">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-center text-sm text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, earum.
          Dicta quo saepe iusto, mollitia enim repudiandae{" "}
        </p>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-center gap-2.5 text-sm">
            <GoogleSingUp />
            <MicrosoftSingUp />
          </div>
          <Divider label="or sing up with" />
          <div className="flex flex-col gap-4">
            <Input
              title="E-Mail"
              placeholder="Your email address"
              field={errors.email}
              status={errors.email.length != 0 ? "error" : "default"}
              onChange={(value) =>
                setRequest((prev) => ({ ...prev, email: value }))
              }
            />
            <Input
              title="Password"
              placeholder="Your password"
              type="password"
              field={errors.password}
              status={errors.password.length != 0 ? "error" : "default"}
              onChange={(value) =>
                setRequest((prev) => ({ ...prev, password: value }))
              }
            />
            <Button
              label="Iniciar Sesión"
              isLoading={loading}
              onClick={() => handleLoginClick()}
              // appareance="ghost"
            />
          </div>
        </div>
      </article>
      <figure className="w-full flex-1 overflow-hidden rounded">
        <img
          draggable={false}
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/4726054/pexels-photo-4726054.jpeg?cs=srgb&dl=pexels-joaodelicado-4726054.jpg&fm=jpg"
          alt=""
        />
      </figure>
    </section>
  );
};

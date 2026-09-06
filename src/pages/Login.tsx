import { Button, Divider, Flex, Form, Input, Typography } from "antd";
import { useAuthManagement } from "../hooks/auth/useAuthManagement";
import { Field } from "@/components/ui/Field";
import { useState } from "react";

export const Login = () => {
  const { loading, handleLogin } = useAuthManagement();
  const [request, setRequest] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    handleLogin(request);
  };

  return (
    <section className="flex size-full items-center justify-center">
      <Form className="w-full max-w-sm" onFinish={handleSubmit}>
        <Typography.Title level={2} className="mb-6 text-center">
          Login
        </Typography.Title>

        <Typography.Text className="mb-6 block text-center text-sm">
          Enter your email and password to access your account
        </Typography.Text>

        <Flex gap={12}>
          <Button
            className="flex-1"
            style={{ height: 36 }}
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"
                className="size-4"
              />
            }
          >
            Google
          </Button>

          <Button
            className="flex-1"
            style={{ height: 36 }}
            icon={
              <img
                src="https://img.icons8.com/color/512/microsoft.png"
                className="size-4.5"
              />
            }
          >
            Microsoft
          </Button>
        </Flex>

        <Divider>
          <span className="text-xs font-light text-gray-400">
            o continua con
          </span>
        </Divider>

        <Form.Item name="email">
          <Field label="Email">
            <Input
              //   type="email"
              style={{ height: 36 }}
              placeholder="Enter your email address"
              onChange={(e) =>
                setRequest((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </Field>
        </Form.Item>

        <Form.Item name="password">
          <Field label="Contraseña" rightLabel="Olvidaste tu contraseña?">
            <Input.Password
              style={{ height: 36 }}
              placeholder="Enter your password"
              onChange={(e) =>
                setRequest((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </Field>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ height: 36 }}
          className="w-full"
          loading={loading}
        >
          Iniciar Sesión
        </Button>

        <Typography.Text className="mt-6 block text-center">
          No tienes una cuenta?{" "}
          <Button type="link" style={{ padding: 0 }}>
            Regístrate
          </Button>
        </Typography.Text>
      </Form>
    </section>
  );
};

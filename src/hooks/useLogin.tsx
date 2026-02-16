import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    api: "",
  });
  const [request, setRequest] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (errors.email && request.email.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (errors.password && request.password.length > 0) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }, [request]);

  const handleLoginClick = () => {
    // Resetear errores
    setErrors({ email: "", password: "", api: "" });

    // Validar campos
    let hasError = false;
    const newErrors = { email: "", password: "", api: "" };

    if (request.email.length === 0) {
      newErrors.email = "The email is required";
      hasError = true;
    }

    if (request.password.length === 0) {
      newErrors.password = "The password is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    fetch("http://localhost:5276/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: request.email,
        password: request.password,
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Credenciales incorrectas");
        } else {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Error en el servidor");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        setErrors((prev) => ({
          ...prev,
          email: error.message,
          password: error.message,
        }));
      });
  };

  return { loading, request, errors, handleLoginClick, setRequest };
};

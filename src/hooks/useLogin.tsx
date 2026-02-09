import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    email: "",
    password: "",
  });

  const handleLoginClick = () => {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message || "Login failed");
      });
  };

  return { loading, request, handleLoginClick, setRequest };
};

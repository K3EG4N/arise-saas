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
        setLoading(false);
        if (res.ok) {
          navigate("/dashboard");
        } else {
          alert("Login failed");
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return { loading, request, handleLoginClick, setRequest };
};

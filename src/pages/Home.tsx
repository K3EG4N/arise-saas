import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-xl">
      Página de Presentación
      <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
    </div>
  );
};

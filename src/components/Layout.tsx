import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="h-screen w-screen bg-white">
      <Outlet />
    </div>
  );
};

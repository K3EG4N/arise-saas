import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="p-2 h-screen">
      <Outlet />
    </div>
  );
};

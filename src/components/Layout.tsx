import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="h-screen bg-white p-2 dark:bg-neutral-950">
      <Outlet />
    </div>
  );
};

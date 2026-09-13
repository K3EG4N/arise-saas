import { Sidebar } from "@/components/siderbar/Sidebar";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="flex h-screen w-full gap-3 bg-[#E8E8E8] p-2.5">
      <Sidebar />
      <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-lg bg-white p-3 shadow">
        <Outlet />
      </div>
    </main>
  );
};

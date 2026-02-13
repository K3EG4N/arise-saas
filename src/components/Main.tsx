import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/siderbar/Sidebar";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="flex h-full w-full gap-3 rounded-md">
      <Sidebar />
      <section className="flex flex-1 flex-col gap-3">
        <Navbar />
        <div className="h-full flex-1 rounded bg-neutral-50 shadow">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

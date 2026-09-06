import { Sidebar } from "@/components/siderbar/Sidebar";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="flex h-full w-full gap-3 bg-[#E8E8E8] p-2.5">
      <Sidebar />
      <section className="flex flex-1 flex-col gap-3">
        {/* <Navbar /> */}
        <div className="h-full min-h-0 flex-1 rounded-lg bg-neutral-50 p-3 shadow">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

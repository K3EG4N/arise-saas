import { Main } from "@/components/Main";
import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/siderbar/Sidebar";

export const Dashboard = () => {
  return (
    <main className="flex gap-3 h-full w-full rounded-md ">
      <Sidebar />
      <section className="flex flex-col flex-1 gap-3">
        <Navbar />
        <Main />
      </section>
    </main>
  );
};

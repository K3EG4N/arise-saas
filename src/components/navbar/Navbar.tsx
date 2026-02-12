import { Notifactions } from "./fragments/Notifactions";
import { UserBadge } from "./fragments/UserBadge";
import { Divider } from "../ui/Divider";
import { Search } from "./fragments/Searcher";
import { BreadCrum } from "../ui/BreadCrum";

export const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-4 rounded px-4 py-2 shadow">
      <BreadCrum items={["Main", "Employees"]} />
      <div className="w-[30%]">
        <Search />
      </div>
      <section className="flex h-full min-w-0 items-center gap-3.5">
        <Notifactions />
        <Divider orientation="vertical" />
        <UserBadge />
      </section>
    </header>
  );
};

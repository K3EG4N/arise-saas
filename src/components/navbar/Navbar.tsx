import { Divider } from "../ui/Divider";
import { Search } from "../Searcher";
import { BreadCrum } from "../ui/BreadCrum";
import { Notifactions } from "./fragments/Notifactions";
import { UserBadge } from "./fragments/UserBadge";

export const Navbar = () => {
  return (
    <header className="shadow h-16 rounded py-2 px-4 flex items-center justify-between gap-4">
      <BreadCrum items={["Main", "Employees"]} />
      <div className="w-[30%]">
        <Search />
      </div>
      <section className="flex items-center h-full gap-3.5 min-w-0">
        <Notifactions />
        <Divider orientation="vertical" />
        <UserBadge />
      </section>
    </header>
  );
};

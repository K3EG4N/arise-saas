import { Notifactions } from "./fragments/Notifactions";
import { UserBadge } from "./fragments/UserBadge";
import { Divider } from "../ui/Divider";
import { Search } from "./fragments/Searcher";
import { BreadCrum } from "../ui/BreadCrum";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex h-fit items-center justify-between gap-4 rounded px-4 py-2 shadow">
      <BreadCrum items={["Main", location?.state?.route]} />
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

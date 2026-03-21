import { Notifications } from "./fragments/Notifactions";
import { UserBadge } from "./fragments/UserBadge";
import { Search } from "./fragments/Searcher";
import { useLocation } from "react-router-dom";
import { BreadCrum, Divider } from "arise-ui";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex h-fit items-center justify-between gap-4 rounded px-4 py-2 shadow">
      <BreadCrum items={["Main", location?.state?.route]} />
      <div className="w-[30%]">
        <Search />
      </div>
      <section className="flex h-full min-w-0 items-center gap-3.5">
        <Notifications />
        <Divider orientation="vertical" />
        <UserBadge />
      </section>
    </header>
  );
};

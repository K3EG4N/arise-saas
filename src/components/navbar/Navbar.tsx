// import { Notifications } from "./fragments/Notifactions";
import { UserBadge } from "./fragments/UserBadge";
import { Search } from "./fragments/Searcher";
import { useLocation } from "react-router-dom";
import { BreadCrum, Divider } from "arise-ui";
import { Notifications } from "./fragments/Notifactions";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex h-fit items-center justify-between gap-4 rounded bg-neutral-50 px-4 py-2 shadow dark:bg-neutral-900">
      <BreadCrum items={["Main", location?.state?.route]} />
      <div className="w-[30%]">
        <Search />
      </div>
      <section className="flex h-full min-w-0 items-center gap-3.5">
        {/* <Theme /> */}
        <Notifications />
        <Divider orientation="vertical" />
        <UserBadge />
      </section>
    </header>
  );
};

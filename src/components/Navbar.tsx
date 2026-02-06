import { Bell } from "@/icons/Bell";
import { Divider } from "./ui/Divider";
import { Search } from "./Searcher";
import { Button } from "./ui/Button";
import { BreadCrum } from "./ui/BreadCrum";

export const Navbar = () => {
  return (
    <header className="shadow h-16 rounded py-2 px-4 flex items-center justify-between gap-4">
      <BreadCrum items={["Main", "Employees"]} />
      <div className="w-[30%]">
        <Search />
      </div>
      <section className="flex items-center h-full gap-3.5 min-w-0">
        <Bell />
        {/* <div>
          <Button icon={<Bell />} iconPosition="left" appareance="ghost" />
        </div> */}
        <Divider orientation="vertical" />
        <UserInfo />
      </section>
    </header>
  );
};

const UserInfo = () => {
  return (
    <div className="flex items-center gap-0.5 whitespace-nowrap">
      <figure className="rounded-lg overflow-hidden w-12 cursor-pointer shrink-0">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtQ37zRuglzwD92tAgIBu2aNuzXP0qaoN5UuqYLGr1OffQlPJZ"
          alt=""
          draggable={false}
          className="size-full object-cover"
        />
      </figure>
      <div className="flex flex-col w-fit">
        <span className="ml-2 text-sm font-medium truncate">
          Juan Felipe Espinoza
        </span>
        <span className="ml-2 text-xs text-gray-500 truncate">
          Software Engineer
        </span>
      </div>
    </div>
  );
};

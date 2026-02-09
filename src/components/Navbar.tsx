import { Bell } from "@/icons/Bell";
import { Divider } from "./ui/Divider";
import { Search } from "./Searcher";
import { BreadCrum } from "./ui/BreadCrum";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenData } from "@/utils/token";
import { EmployeeContext } from "@/context/EmployeeContext";

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
  const navigate = useNavigate();
  const context = useContext(EmployeeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const info = getTokenData(token);

      fetch(`http://localhost:5276/api/employee/user/${info.userId}`, {
        method: "GET",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((data) => {
          context?.setEmployee(data);
        });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex items-center gap-0.5 whitespace-nowrap">
      <figure className="rounded-lg overflow-hidden w-12 cursor-pointer shrink-0">
        <img
          src={context?.employee?.foto}
          alt=""
          draggable={false}
          className="size-full object-cover"
        />
      </figure>
      <div className="flex flex-col w-fit">
        <span className="ml-2 text-sm font-medium truncate">
          {context?.employee?.name}
        </span>
        <span className="ml-2 text-xs text-gray-500 truncate">
          {context?.employee?.email}
        </span>
      </div>
    </div>
  );
};

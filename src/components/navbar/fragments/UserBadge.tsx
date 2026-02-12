import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "@/context/EmployeeContext";
import { ChevronDown } from "@/icons/Regular/ChevronDown";
import { getTokenData } from "@/utils/token";
import { Logout } from "./Logout";

export const UserBadge = () => {
  const navigate = useNavigate();
  const [openOpcion, setOpenOpcion] = useState(false);
  const { employee, setEmployee } = useContext(EmployeeContext) ?? {};

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!setEmployee) return;

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
        setEmployee(data);
      });
  }, [navigate, setEmployee]);

  return (
    <div className="relative flex h-full items-center gap-0.5 whitespace-nowrap">
      <figure className="w-12 shrink-0 cursor-pointer overflow-hidden rounded-lg">
        <img
          src={employee?.foto}
          alt=""
          draggable={false}
          className="size-full object-cover"
        />
      </figure>
      <div className="flex w-fit flex-col">
        <span className="ml-2 truncate text-sm font-medium">
          {employee?.name}
        </span>
        <span className="ml-2 truncate text-xs text-gray-500">
          {employee?.email}
        </span>
      </div>
      <div
        className="ml-2 flex h-full cursor-pointer items-center"
        onClick={() => setOpenOpcion((prev) => !prev)}
      >
        <ChevronDown />
      </div>
      <Logout active={openOpcion} onClose={() => setOpenOpcion(false)} />
    </div>
  );
};

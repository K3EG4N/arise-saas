import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "@/context/EmployeeContext";
import { ChevronDown } from "@/icons/Regular/ChevronDown";
import { getTokenData } from "@/utils/token";

export const UserBadge = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
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
    <div className="flex items-center gap-0.5 whitespace-nowrap">
      <figure className="rounded-lg overflow-hidden w-12 cursor-pointer shrink-0">
        <img
          src={employee?.foto}
          alt=""
          draggable={false}
          className="size-full object-cover"
        />
      </figure>
      <div className="flex flex-col w-fit">
        <span className="ml-2 text-sm font-medium truncate">
          {employee?.name}
        </span>
        <span className="ml-2 text-xs text-gray-500 truncate">
          {employee?.email}
        </span>
      </div>
      <div className="ml-2 h-full cursor-pointer">
        <ChevronDown />
      </div>
    </div>
  );
};

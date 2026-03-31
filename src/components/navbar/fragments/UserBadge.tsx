import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenData } from "@/utils/token";
import { Logout } from "./Logout";
import { useRenderIcon } from "arise-ui";
import { SessionUserContext } from "@/context/SessionUserContext";

export const UserBadge = () => {
  const navigate = useNavigate();
  const toggleRef = useRef<HTMLDivElement>(null);
  const { getIconByName } = useRenderIcon();
  const [openOpcion, setOpenOpcion] = useState(false);
  const { user, setUser } = useContext(SessionUserContext) ?? {};

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!setUser) return;

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
        setUser(data);
      });
  }, [navigate, setUser]);

  return (
    <div className="relative flex h-full items-center whitespace-nowrap">
      <figure className="size-10 shrink-0 cursor-pointer overflow-hidden rounded">
        {user?.foto ? (
          <img
            src={user?.foto}
            alt=""
            draggable={false}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-9 items-center justify-center rounded bg-gray-200/70 font-medium">
            {user?.name.charAt(0)}
            {user?.name.split(" ")[1]?.charAt(0) || ""}
          </div>
        )}
      </figure>
      <div className="ml-1.5 flex w-fit flex-col">
        <span className="truncate text-sm font-medium">
          {user?.name.split(" ")[0]} {user?.name.split(" ")[1]}
        </span>
      </div>
      <div
        ref={toggleRef}
        className="ml-2 flex h-full cursor-pointer items-center"
        onClick={() => setOpenOpcion((prev) => !prev)}
      >
        {
          getIconByName(
            "chevronDown",
            `size-4 stroke-2 transition-transform ${openOpcion ? "rotate-180" : ""}`,
          )?.icon
        }
      </div>
      <Logout
        active={openOpcion}
        onClose={() => setOpenOpcion(false)}
        toggleRef={toggleRef}
        sessionUser={{
          name: user?.name ?? "",
          email: user?.email ?? "",
          photo: user?.foto,
        }}
      />
    </div>
  );
};

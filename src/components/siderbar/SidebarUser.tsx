import { Divider, Dropdown } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "@/hooks/context/useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SidebarUser = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();
  const { user, logout, status } = useAuthContext();

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const dropdownRender = () => (
    <div className="w-64 rounded-md border border-slate-200/80 bg-white p-1.5">
      <button className="group flex w-full cursor-pointer items-center gap-3 rounded-md p-1 text-left transition-colors hover:bg-gray-100/70">
        <span
          className={`flex size-9 shrink-0 items-center justify-center text-base`}
        >
          <UserOutlined />
        </span>
        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
          Perfil
        </span>
      </button>

      <button className="group flex w-full cursor-pointer items-center gap-3 rounded-md p-1 text-left transition-colors hover:bg-gray-100/70">
        <span
          className={`flex size-9 shrink-0 items-center justify-center text-base`}
        >
          <SettingOutlined />
        </span>
        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
          Configuración
        </span>
      </button>

      <Divider size="small" />

      <button
        onClick={logout}
        className="group flex w-full cursor-pointer items-center gap-3 rounded-md p-1 text-left transition-colors hover:bg-red-50"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg text-base text-red-500">
          <LogoutOutlined />
        </span>
        <span className="text-sm font-medium text-red-500">Cerrar sesión</span>
      </button>
    </div>
  );

  return (
    <Dropdown
      trigger={["click"]}
      placement="topRight"
      arrow
      popupRender={dropdownRender}
    >
      <div
        className={`flex w-full cursor-pointer flex-col items-center gap-2 rounded px-1 text-neutral-600 transition-all hover:bg-gray-100/70`}
      >
        <div className="my-1 flex w-full items-center gap-1">
          <figure className="size-10 flex justify-center items-center shrink-0 cursor-pointer overflow-hidden rounded bg-gray-200/70">
            {user?.photo ? (
              <img
                src={user?.photo}
                alt=""
                draggable={false}
                className="size-full object-cover"
              />
            ) : (
              <div className="bg-jade-500 flex size-full items-center justify-center rounded font-medium text-white">
                {user?.name.charAt(0)}
                {user?.name.split(" ")[1]?.charAt(0) || ""}
              </div>
            )}
          </figure>
          <div
            className={`flex w-full justify-between transition-all duration-300 ${
              collapsed ? "w-0 opacity-0" : "w-full opacity-100"
            }`}
          >
            <div className="ml-1.5 flex w-full flex-col justify-center">
              <span className="truncate text-sm font-medium">
                {user?.name.split(" ")[0]} {user?.name.split(" ")[1]}
              </span>
              <span className="text-xs">{user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};

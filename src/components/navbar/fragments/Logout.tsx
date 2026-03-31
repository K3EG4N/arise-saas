import { Divider, useRenderIcon } from "arise-ui";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  active: boolean;
  onClose: () => void;
  toggleRef?: React.RefObject<HTMLDivElement | null>;
  sessionUser: {
    name: string;
    email: string;
    photo?: string;
  };
}

type Theme = "light" | "dark" | "system";

export const Logout = ({
  active,
  onClose,
  sessionUser,
  toggleRef,
}: LogoutProps) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getIconByName } = useRenderIcon();
  const [activeTheme, setActiveTheme] = useState<Theme>("light");

  const themes: { key: Theme; label: string; icon: string }[] = [
    { key: "light", label: "Light", icon: "sun" },
    { key: "dark", label: "Dark", icon: "moon" },
    { key: "system", label: "System", icon: "monitor" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !toggleRef?.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, onClose, toggleRef]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full right-0 z-9999 mt-1 w-74 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${
        active
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div>
        <section className="flex items-center gap-2 px-2 pt-2">
          {sessionUser.photo ? (
            <figure className="size-10">
              <img
                src={sessionUser.photo}
                alt={`${sessionUser.name}-photo`}
                className="size-full rounded object-cover"
              />
            </figure>
          ) : (
            <div className="flex size-10 items-center justify-center rounded bg-gray-200/70 font-medium">
              <span>
                {sessionUser.name.charAt(0)}
                {sessionUser.name.split(" ")[1]?.charAt(0) || ""}
              </span>
            </div>
          )}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium">{sessionUser.name}</span>
            <p className="text-xs text-gray-500">{sessionUser.email}</p>
          </div>
        </section>

        <Divider />

        <section className="mx-2 flex justify-between gap-2 rounded bg-slate-200/50 p-1.5">
          {themes.map(({ key, label, icon }) => {
            const isActive = activeTheme === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTheme(key)}
                className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded py-1 transition-colors ${
                  isActive ? "bg-teal-500 shadow-sm" : "hover:bg-white/60"
                }`}
              >
                {
                  getIconByName(
                    icon as Parameters<typeof getIconByName>[0],
                    isActive
                      ? "stroke-white size-4 stroke-2 fill-white"
                      : "size-4 stroke-2 text-gray-700",
                  )?.icon
                }
                <span
                  className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-600"}`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </section>

        <Divider />

        <section className="px-2">
          <button className="flex w-full cursor-pointer items-center gap-3 rounded px-2 py-2.5 transition-colors hover:bg-gray-100/80">
            {getIconByName("user", "size-4.5 stroke-2")?.icon}
            <span className="text-sm font-medium text-gray-700">Profile</span>
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded px-2 py-2.5 transition-colors hover:bg-gray-100/80">
            {getIconByName("book", "size-4.5 stroke-2 mt-0.5")?.icon}
            <span className="text-sm font-medium text-gray-700">
              Documentation
            </span>
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded px-2 py-2.5 transition-colors hover:bg-gray-100/80">
            {getIconByName("settings", "size-4.5 stroke-2")?.icon}
            <span className="text-sm font-medium text-gray-700">Settings</span>
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded px-2 py-2.5 transition-colors hover:bg-gray-100/80">
            {getIconByName("code", "size-4.5 stroke-2 mt-[3px]")?.icon}
            <span className="text-sm font-medium text-gray-700">Api</span>
          </button>
        </section>

        <Divider />

        <section className="px-2">
          <button
            className="mb-2 flex w-full cursor-pointer items-center gap-3 rounded px-2 py-2.5 text-left transition-colors hover:bg-gray-100/80"
            onClick={handleLogout}
          >
            {getIconByName("logout", "size-4.5 stroke-2 ml-0.5")?.icon}
            <span className="text-sm font-medium text-gray-700">Logout</span>
          </button>
        </section>

        <section className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-4.5 py-2">
          <span className="text-[11px] font-semibold tracking-wide text-gray-400">
            Arise
          </span>
          <span className="rounded bg-teal-100/50 px-2.5 py-1 text-[10px] font-medium text-teal-600">
            v1.0.0
          </span>
        </section>
      </div>
    </div>
  );
};

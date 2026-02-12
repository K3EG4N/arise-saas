import { Button } from "@/components/ui/Button";
import { Settings } from "@/icons/Regular/Settings";
import { User } from "@/icons/Regular/User";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  active: boolean;
  onClose: () => void;
}

export const Logout = ({ active, onClose }: LogoutProps) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (active) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, onClose]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full right-0 z-50 mt-2 w-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${
        active
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="p-2">
        <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-gray-100/80">
          <User />
          <span className="text-sm font-medium text-gray-700">Profile</span>
        </button>

        <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-gray-100/80">
          <Settings />
          <span className="text-sm font-medium text-gray-700">Settings</span>
        </button>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-3 py-3">
        <Button label="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

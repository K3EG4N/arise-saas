import { useEffect, useState } from "react";
import type { IUser } from "../interfaces/IUser";
import type { ICollection } from "@/interfaces/ICollection";
import { UserService } from "@/services/UserService";

export const useListUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<ICollection<IUser>>();

  const getUsers = () => {
    setLoading(true);
    UserService.GetAllUsers().then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);

  return { loading, users, getUsers };
};

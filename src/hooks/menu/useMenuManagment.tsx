import { MenuService } from "@/services/MenuService";
import { useApiRequest } from "../useApiRequest";
import { useEffect, useState } from "react";
import { useLoaderContext } from "../context/useLoaderContext";
import type { IMenu } from "@/interfaces/IMenu";

export const useMenuManagement = () => {
  const { execute } = useApiRequest();
  const { setLoading } = useLoaderContext();
  const [menu, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    getMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMenuItems = async () => {
    const items = await execute(() => MenuService.getMenuItems());
    setLoading(false);

    if (items?.isSuccess) {
      setMenu(items.value ?? []);
    }
  };

  return { menu };
};

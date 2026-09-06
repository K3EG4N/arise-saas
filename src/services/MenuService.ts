import type { IResult } from "@/interfaces/IRequest";
import type { IMenu } from "@/interfaces/IMenu";
import { httpClient } from "./api/axiosInstance";

const getMenuItems = async () => {
  const response = await httpClient.get<IResult<IMenu[]>>("/menu");
  return response.data;
};

export const MenuService = { getMenuItems };

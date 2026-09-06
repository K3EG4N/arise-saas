import { Approuter } from "@/routes/Approuter";

export const navigateTo = (path: string) => {
  Approuter.navigate(path);
};

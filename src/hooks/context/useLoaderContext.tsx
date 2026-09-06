import { LoaderContext } from "@/context/LoaderContext";
import { useContext } from "react";

export const useLoaderContext = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoaderContext must be used within a LoaderProvider");
  }
  
  return context;
};

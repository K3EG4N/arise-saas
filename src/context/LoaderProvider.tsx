import { useState } from "react";
import { LoaderContext } from "./LoaderContext";
import { LoaderScreen } from "@/components/loader/LoaderScreen";

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      <LoaderScreen loading={loading} />
    </LoaderContext.Provider>
  );
};

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { SessionUserProvider } from "./context/SessionUserProvider";
import { ThemeProvider } from "./context/ThemeProvider";

export const App = () => {
  return (
    <ThemeProvider>
      <SessionUserProvider>
        <RouterProvider router={router} />
      </SessionUserProvider>
    </ThemeProvider>
  );
};

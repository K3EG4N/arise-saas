import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { EmployeeProvider } from "./context/EmployeeProvider";

export const App = () => {
  return (
    <EmployeeProvider>
      <RouterProvider router={router} />
    </EmployeeProvider>
  );
};

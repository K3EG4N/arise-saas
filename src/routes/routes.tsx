import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Dashboard } from "@/pages/Dashboard";
import { Layout } from "@/components/Layout";
import { Main } from "@/components/Main";
import { Employees } from "@/pages/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <Main />,
        children: [
          {
            index: true,
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/employees",
            element: <Employees />,
          },
        ],
      },
    ],
  },
]);

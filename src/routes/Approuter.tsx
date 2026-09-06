import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { Layout } from "@/components/Layout";
import { Main } from "@/components/Main";
import { Employees } from "@/pages/employees/Employees";
import { Users } from "@/pages/users/Users";

export const Approuter = createBrowserRouter([
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
            element: <h1>owo</h1>,
          },
          {
            path: "/employees",
            element: <h1>uwu</h1>,
          },
          {
            path: "/organization",
            element: <h1>uwu</h1>,
          },
          //   {
          //     path: "/employees/users",
          //     element: <Users />,
          //   },
          //   {
          //     path: "/teams",
          //     element: <h1>Teams</h1>,
          //   },
        ],
      },
    ],
  },
]);

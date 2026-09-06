import {
  Table,
  useRenderIcon,
  type IColumn,
  type ITableButtons,
} from "arise-ui";
import type { IUser } from "./interfaces/IUser";
import { useListUsers } from "./hooks/useListUsers";
import { CreateUser } from "./components/CreateUser";
import { useState } from "react";

export const Users = () => {
  const { getIconByName } = useRenderIcon();
  const { loading, users, getUsers } = useListUsers();
  const [openCreate, setOpenCreate] = useState(false);

  const columns: IColumn<IUser>[] = [
    {
      id: 1,
      name: "Dni",
      field: "dni",
    },
    {
      id: 2,
      name: "Username",
      field: "username",
    },
    {
      id: 3,
      name: "Email",
      field: "email",
    },
    {
      id: 4,
      name: "Employee Code",
      field: "employeeCode",
    },
  ];

  const buttons: ITableButtons = {
    left: [
      {
        label: "Refresh",
        icon: getIconByName("refresh")?.icon,
        onClick: getUsers,
      },
      {
        label: "Create",
        icon: getIconByName("add")?.icon,
        onClick: () => setOpenCreate(true),
      },
    ],
  };

  return (
    <section className="flex h-full flex-col">
      <h1 className="text-2xl font-medium">Users</h1>
      <span className="text-sm">
        See all users of your work and make changes
      </span>

      <CreateUser isOpen={openCreate} onClose={() => setOpenCreate(false)} />

      <Table
        hasSearch
        isLoading={loading}
        columns={columns}
        data={users?.data || []}
        buttons={buttons}
      />
    </section>
  );
};

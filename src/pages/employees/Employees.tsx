import { useState } from "react";
import { CreateEmployee } from "./panels/CreateEmployee";
import { STATUS } from "@/enums/Status";
import {
  Badge,
  Person,
  Table,
  useRenderIcon,
  type IBadgeStatus,
  type IColumn,
  type ITableButtons,
} from "arise-ui";
import { useListEmployees } from "./hooks/useListEmployees";
import type { IEmployees } from "./interfaces/IEmployee";

export const Employees = () => {
  const { getIconByName } = useRenderIcon();
  const { data, getEmployees, pagination, loading, handleSearch } =
    useListEmployees();
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const columns: IColumn<IEmployees>[] = [
    {
      id: 1,
      name: "Name",
      field: "name",
      width: "300px",
      onRender: (item) => (
        <Person primeryText={item.name} imgUrl={item.photo} />
      ),
    },
    {
      id: 2,
      name: "Code",
      field: "code",
    },
    {
      id: 2,
      name: "Dni",
      field: "dni",
    },
    // {
    //   id: 3,
    //   name: "Email",
    //   field: "email",
    //   width: "300px",
    // },
    {
      id: 4,
      name: "Phone",
      field: "phone",
      visible: false,
    },
    {
      id: 4,
      name: "Department",
      field: "department",
      visible: false,
    },
    {
      id: 3,
      name: "Gender",
      field: "gender",
    },
    {
      id: 5,
      name: "Joined Date",
      field: "hireDate",
      //   width: "100px",
      visible: false,
    },
    {
      id: 6,
      name: "Birth Date",
      field: "birthDate",
      //   width: "100px",
    },
    {
      id: 7,
      name: "Status",
      field: "status",
      onRender: (item) => (
        <Badge
          text={item.status}
          status={
            STATUS[item.statusCode as keyof typeof STATUS] as IBadgeStatus
          }
        />
      ),
    },
    // {
    //   id: 6,
    //   name: "Actions",
    //   field: "action",
    // },
  ];

  const buttons: ITableButtons = {
    left: [
      {
        label: "Refresh",
        icon: getIconByName("refresh")?.icon,
        onClick: () => getEmployees(),
      },
      {
        label: "Create",
        icon: getIconByName("add", "stroke-2 size-5")?.icon,
        onClick: () => setOpenCreateModal(true),
      },
      {
        label: "Export",
        icon: getIconByName("downloadCloud")?.icon,
      },
    ],
    right: [
      {
        label: "Filter",
        icon: getIconByName("filter")?.icon,
      },
    ],
  };

  return (
    <section className="flex h-full flex-col">
      <h1 className="text-2xl font-medium">Employees</h1>
      <span className="text-sm">
        See all employees of your work and make changes
      </span>

      <CreateEmployee
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
      <Table
        // customizable
        multiSelect
        hasSearch
        onSearch={handleSearch}
        isLoading={loading}
        columns={columns}
        data={data?.data ?? []}
        buttons={buttons}
        pagination={pagination}
      />
    </section>
  );
};

import { useState } from "react";
import { CreateSingleEmployee } from "./components/CreateSingleEmployee";
import { STATUS } from "@/enums/Status";
import {
  Badge,
  DropDown,
  Person,
  Table,
  useRenderIcon,
  type IBadgeStatus,
  type IColumn,
  type ITableButtons,
} from "arise-ui";
import type { IEmployees } from "./interfaces/IEmployee";
import { useListEmployees } from "./hooks/useListEmployees";
import { CreateMassiveEmployee } from "./components/CreateMassiveEmployee";
import { UpdateEmployee } from "./components/UpdateEmployee";
import { DeleteEmployee } from "./components/DeleteEmployee";

export const Employees = () => {
  const { getIconByName } = useRenderIcon();
  const { data, getEmployees, pagination, loading, handleSearch } =
    useListEmployees();
  const [employee, setEmployee] = useState<IEmployees>();
  const [openUpdateEmployee, setOpenUpdateEmployee] = useState(false);
  const [openCreateSingle, setOpenCreateSingle] = useState(false);
  const [openCreateMassive, setOpenCreateMassive] = useState(false);
  const [openDeleteEmployee, setOpenDeleteEmployee] = useState(false);

  const columns: IColumn<IEmployees>[] = [
    {
      id: 1,
      name: "Name",
      field: "fullName",
      width: "300px",
      onRender: (item) => (
        <Person primeryText={item.fullName} imgUrl={item.photo} />
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
      width: "220px",
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
      visible: false,
    },
    {
      id: 6,
      name: "Birth Date",
      field: "birthDate",
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
    {
      id: 6,
      name: "Actions",
      field: "action",
      width: "100px",
      onRender: (item) => (
        <DropDown
          appareance="none"
          icon={getIconByName("more")?.icon}
          options={[
            {
              label: "Edit",
              value: "edit",
              icon: getIconByName("edit", "size-4.5")?.icon,
              onClick: () => {
                setOpenUpdateEmployee(true);
                setEmployee(item);
              },
            },
            {
              label: "Delete",
              value: "delete",
              icon: getIconByName("trash", "size-4.5")?.icon,
              onClick: () => {
                setOpenDeleteEmployee(true);
                setEmployee(item);
              },
            },
          ]}
        />
      ),
    },
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
        icon: getIconByName("add")?.icon,
        type: "dropdown",
        options: [
          {
            label: "Single",
            value: "single",
            icon: getIconByName("user", "stroke-2 size-4")?.icon,
            onClick: () => setOpenCreateSingle(true),
          },
          {
            label: "Bulk",
            value: "bulk",
            icon: getIconByName("uploadCloud", "size-4 stroke-2")?.icon,
            onClick: () => setOpenCreateMassive(true),
          },
        ],
      },
      {
        label: "Export",
        icon: getIconByName("downloadCloud", "size-4.5")?.icon,
      },
    ],
    // right: [
    //   {
    //     label: "Filter",
    //     icon: getIconByName("filter")?.icon,
    //   },
    // ],
  };

  return (
    <section className="flex h-full flex-col">
      <h1 className="text-2xl font-medium">Employees</h1>
      <span className="text-sm">
        See all employees of your work and make changes
      </span>

      <CreateSingleEmployee
        isOpen={openCreateSingle}
        onClose={() => setOpenCreateSingle(false)}
        reload={getEmployees}
      />

      <CreateMassiveEmployee
        isOpen={openCreateMassive}
        onClose={() => setOpenCreateMassive(false)}
      />

      <UpdateEmployee
        isOpen={openUpdateEmployee}
        onClose={() => setOpenUpdateEmployee(false)}
        employee={employee}
        reload={getEmployees}
      />

      <DeleteEmployee
        isOpen={openDeleteEmployee}
        onClose={() => setOpenDeleteEmployee(false)}
        reload={getEmployees}
        employee={employee}
      />

      <Table
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

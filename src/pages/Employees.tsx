import { Badge } from "@/components/ui/Badge";
import { Person } from "@/components/ui/Person";
import { Table } from "@/components/ui/Table";
import { useListEmployees } from "@/services/employee/useListEmployees";
import { useRenderIcon } from "@/hooks/useRenderIcon";
import { STATUS } from "@/enums/Status";
import type { IColumn } from "@/interfaces/Generic/IColumns";
import type { IEmployees } from "@/services/employee/IEmployee";
import type { ITableButtons } from "@/interfaces/ITable";
import type { IBadgeStatus } from "@/interfaces/IBadge";

export const Employees = () => {
  const { data, getEmployees, pagination, loading } = useListEmployees();
  const { getIconByName } = useRenderIcon();

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
      width: "90px",
    },
    {
      id: 2,
      name: "Dni",
      field: "dni",
      width: "90px",
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
      //   width: "100px",
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
        icon: getIconByName("add")?.icon,
      },
      {
        label: "Export",
        icon: getIconByName("download")?.icon,
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
      <Table
        customizable
        multiSelect
        // hasSearch
        isLoading={loading}
        columns={columns}
        data={data?.data ?? []}
        buttons={buttons}
        pagination={pagination}
      />
    </section>
  );
};

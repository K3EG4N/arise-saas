import { useMemo } from "react";
import { CustomTable } from "@/components/ui/CustomTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { useEmployees } from "@/hooks/employee/useEmployees";
import { usePagination } from "@/hooks/usePagination";
import { resolveIcon } from "@/icons/resolveIcon";
import type { ITableButtons } from "@/interfaces/ui/ICustomTable";

export const Employees = () => {
  const { pagination, setPagination } = usePagination();
  const { employees, getEmployees, loading } = useEmployees(pagination);

  const buttons: ITableButtons[] = [
    {
      type: "default",
      icon: resolveIcon("refresh")?.element,
      onClick: getEmployees,
      label: "Refrescar",
    },
  ];

  const columns = useMemo(
    () => [
      {
        title: "#",
        key: "index",
        width: 60,
        align: "center" as const,
        render: (_: unknown, _record: unknown, index: number) => index + 1,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 250,
      },
      {
        title: "Code",
        dataIndex: "code",
        key: "code",
        width: 120,
      },
      {
        title: "Dni",
        dataIndex: "dni",
        key: "dni",
        width: 120,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        width: 130,
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
        width: 250,
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        // width: 110,
      },
      {
        title: "Joined Date",
        dataIndex: "hireDate",
        key: "hireDate",
        // width: 130,
      },
      {
        title: "Birth Date",
        dataIndex: "birthDate",
        key: "birthDate",
        // width: 130,
      },
    ],
    [],
  );

  return (
    <section className="flex h-full min-h-0 w-full flex-col gap-4">
      <PageHeader
        title="Empleados"
        description="Administra los empleados de su organización y sus datos de contacto."
        breadcrumbItems={[
          {
            title: "Empleados",
          },
        ]}
      />

      <CustomTable
        enableSearch
        loading={loading}
        data={employees?.items ?? []}
        columns={columns}
        pagination={pagination}
        buttons={buttons}
        meta={employees}
        rowKey={(record) => record.employeeId}
        onPaginationChange={setPagination}
      />
    </section>
  );
};

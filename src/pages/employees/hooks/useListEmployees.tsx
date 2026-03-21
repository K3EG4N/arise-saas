import { useEffect, useState } from "react";
import type { ICollection } from "@/interfaces/ICollection";
import type { IEmployees } from "@/pages/employees/interfaces/IEmployee";
import { defaultPagination, type IFilter } from "arise-ui";
import { EmployeeService } from "@/services/EmployeeService";
import { useAbortController } from "@/hooks/useAbortControler";

export const useListEmployees = () => {
  const { getSignal } = useAbortController();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ICollection<IEmployees>>();
  const [pagination, setPagination] = useState(defaultPagination);
  const [filter, setFilter] = useState<IFilter>({
    query: "",
    limit: 50,
    offset: 0,
  });

  const getEmployees = () => {
    setLoading(true);
    EmployeeService.GetAllEmployees(filter, getSignal())
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setPagination({
          totalItems: res.data.totalItems,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
          pageSize: filter.limit,
          filterSetter: setFilter,
        });
      })
      .catch((e) => {
        if (e.config?.signal?.aborted) return;
        setLoading(false);
      });
  };

  const handleSearch = (query: string) => {
    setFilter((prev) => ({ ...prev, query }));
  };

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return { data, pagination, getEmployees, loading, setFilter, handleSearch };
};

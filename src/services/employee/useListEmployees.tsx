import { useEffect, useState } from "react";
import type { IBaseFilter } from "@/interfaces/Generic/IBaseFilter";
import type { IEmployees } from "./IEmployee";
import type { ICollection } from "@/interfaces/Generic/ICollection";
import { defaultPagination } from "@/interfaces/IPagination";

export const useListEmployees = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ICollection<IEmployees>>();
  const [pagination, setPagination] = useState(defaultPagination);
  const [filter, setFilter] = useState<IBaseFilter>({
    query: "",
    limit: 50,
    offset: 0,
  });

  const getEmployees = () => {
    setLoading(true);
    fetch(
      `http://localhost:5276/api/employee?query=${filter.query}&limit=${filter.limit}&offset=${filter.offset}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setPagination({
          totalItems: data.totalItems,
          totalPages: data.totalPages,
          currentPage: data.currentPage,
          pageSize: filter.limit,
          filterSetter: setFilter,
        });
      });
  };

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return { data, pagination, getEmployees, loading, setFilter };
};

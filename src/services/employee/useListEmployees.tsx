import { useEffect, useState } from "react";
import type { IEmployees } from "./IEmployee";
import type { ICollection } from "@/interfaces/Generic/ICollection";
import type { IPaginationSettings } from "@/interfaces/IPagination";

export const useListEmployees = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ICollection<IEmployees>>();
  const [pagination, setPagination] = useState<IPaginationSettings>();

  const getEmployees = () => {
    setLoading(true);
    fetch("http://localhost:5276/api/employee")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setPagination({
          totalItems: data.totalItems,
          totalPages: data.totalPages,
          currentPage: data.currentPage,
          pageSize: 50,
        });
      });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getEmployees();
  }, []);

  return { data, pagination, getEmployees, loading };
};

import { useState } from "react";
import { DepartmentService } from "@/services/DepartmentService";
import type { IComboBoxOption } from "arise-ui";

export const useDepartmentOptions = () => {
  const [departmentOptions, setOptions] = useState<IComboBoxOption[]>([]);

  const getOptions = () => {
    DepartmentService.GetDepartmentsOptions().then((res) => {
      setOptions(res.data);
    });
  };

  return { getOptions, departmentOptions };
};

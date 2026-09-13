import { useState } from "react";
import type { IPagination } from "../interfaces/IPagination";

export function usePagination({
  initialTake = 10,
}: { initialTake?: number } = {}) {
  const [pagination, setPagination] = useState<IPagination>({
    page: 0,
    pageSize: initialTake,
    search: "",
  });

  return { pagination, setPagination };
}

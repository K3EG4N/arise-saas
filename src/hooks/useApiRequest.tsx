import axios from "axios";
import { message } from "antd";
import { useState } from "react";
import type { IResult, IValidation } from "@/interfaces/IRequest";

export const useApiRequest = () => {
  const [loading, setLoading] = useState(false);

  function getFirstValidationError(
    problemDetails?: IValidation,
  ): string | undefined {
    if (!problemDetails?.errors) return undefined;

    const firstKey = Object.keys(problemDetails.errors)[0];
    if (!firstKey) return undefined;

    return problemDetails.errors[firstKey][0];
  }

  const execute = async <T = never,>(
    fn: () => Promise<IResult<T>>,
    options?: { successMessage?: string; errorFallback?: string },
  ): Promise<IResult<T> | null> => {
    setLoading(true);

    try {
      const result = await fn();

      if (result.message) {
        message.success(result.message);
      } else if (options?.successMessage) {
        message.success(options.successMessage);
      }

      setLoading(false);

      return result;
    } catch (err) {
      if (axios.isAxiosError<IValidation>(err)) {
        const problemDetails = err.response?.data;

        const firstError = getFirstValidationError(problemDetails);

        if (!axios.isCancel(err)) {
          setLoading(false);
          message.error(
            firstError ??
              problemDetails?.title ??
              options?.errorFallback ??
              "Ocurrió un error",
          );
        }
      } else {
        message.error(options?.errorFallback ?? "Ocurrió un error");
      }

      return null;
    }
  };

  return {
    execute,
    loading,
  };
};

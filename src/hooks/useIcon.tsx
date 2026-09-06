import { useMemo } from "react";
import { resolveIcon } from "../icons/resolveIcon";
import type { IconVariant } from "@/icons/registry";

export function useIcon(
  alias: string | undefined | null,
  variant?: IconVariant,
) {
  return useMemo(() => resolveIcon(alias, variant), [alias, variant]);
}

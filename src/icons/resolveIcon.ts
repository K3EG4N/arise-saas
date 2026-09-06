// icons/resolveIcon.ts
import { ICON_REGISTRY, type IconAlias, type IconVariant } from "./registry";
import { QuestionCircleOutlined } from "@ant-design/icons";
import type { ComponentType } from "react";

interface ResolvedIcon {
  Icon: ComponentType<any>;
  isSolid: boolean;
}

const FALLBACK: ResolvedIcon = { Icon: QuestionCircleOutlined, isSolid: false };

function isValidAlias(alias: string): alias is IconAlias {
  return alias in ICON_REGISTRY;
}

export function resolveIcon(
  alias: string | undefined | null,
  variant?: IconVariant,
): ResolvedIcon {
  if (!alias || !isValidAlias(alias)) {
    if (alias)
      console.warn(`[resolveIcon] Alias "${alias}" no existe en ICON_REGISTRY`);
    return FALLBACK;
  }

  const entry = ICON_REGISTRY[alias];
  const resolvedVariant = variant ?? entry.defaultVariant;
  return {
    Icon: resolvedVariant === "solid" ? entry.solid : entry.outline,
    isSolid: resolvedVariant === "solid",
  };
}

import { QuestionCircleOutlined } from "@ant-design/icons";
import { ICON_REGISTRY, type IconAlias, type IconVariant } from "./registry";
import { createElement, type ElementType, type ReactNode } from "react";

interface ResolvedIcon {
  Icon: ElementType;
  element: ReactNode;
  isSolid: boolean;
}
const FALLBACK: ResolvedIcon = {
  Icon: QuestionCircleOutlined,
  isSolid: false,
  element: createElement(QuestionCircleOutlined),
};

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
  const Icon = resolvedVariant === "solid" ? entry.solid : entry.outline;

  return {
    Icon,
    element: createElement(Icon),
    isSolid: resolvedVariant === "solid",
  };
}

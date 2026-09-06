import {
  HomeOutlined,
  HomeFilled,
  SettingOutlined,
  SettingFilled,
} from "@ant-design/icons";
import type { ComponentType } from "react";
import {
  AuditOutline,
  AuditSolid,
  DashboardOutline,
  DashboardSolid,
  MailBoxOutline,
  MailBoxSolid,
  OrganigramOutline,
  OrganigramSolid,
  BriefCaseOutline,
  BriefCaseSolid,
  ShieldOutline,
  ShieldSolid,
  TeamOutline,
  TeamSolid,
  UsersOutline,
  UsersSolid,
} from "./CustomIcons";

export type IconAlias =
  | "home"
  | "dashboard"
  | "team"
  | "settings"
  | "users"
  | "shield"
  | "organigram"
  | "safety"
  | "mailBox"
  | "audit";
export type IconVariant = "solid" | "outline";

interface IconEntry {
  outline: ComponentType<any>;
  solid: ComponentType<any>;
  defaultVariant: IconVariant; // por si el alias no especifica variante
}

export const ICON_REGISTRY: Record<IconAlias, IconEntry> = {
  home: { outline: HomeOutlined, solid: HomeFilled, defaultVariant: "outline" },
  dashboard: {
    outline: DashboardOutline,
    solid: DashboardSolid,
    defaultVariant: "outline",
  },
  team: {
    outline: TeamOutline,
    solid: TeamSolid,
    defaultVariant: "outline",
  },
  settings: {
    outline: SettingOutlined,
    solid: SettingFilled,
    defaultVariant: "outline",
  },
  organigram: {
    outline: OrganigramOutline,
    solid: OrganigramSolid,
    defaultVariant: "outline",
  },
  users: {
    outline: UsersOutline,
    solid: UsersSolid,
    defaultVariant: "outline",
  },
  shield: {
    outline: ShieldOutline,
    solid: ShieldSolid,
    defaultVariant: "outline",
  },
  audit: {
    outline: AuditOutline,
    solid: AuditSolid,
    defaultVariant: "outline",
  },
  safety: {
    outline: BriefCaseOutline,
    solid: BriefCaseSolid,
    defaultVariant: "outline",
  },
  mailBox: {
    outline: MailBoxOutline,
    solid: MailBoxSolid,
    defaultVariant: "outline",
  },
};

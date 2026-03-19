export interface IBadge {
  text: string;
  status: IBadgeStatus;
}

export type IBadgeStatus = "success" | "warning" | "error" | "info";

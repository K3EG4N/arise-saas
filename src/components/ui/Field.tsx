import { Typography } from "antd";
import type { ReactNode } from "react";

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: 500,
  marginBottom: "3px",
};

const rightLabelStyle: React.CSSProperties = {
  fontSize: "11.5px",
  marginBottom: "3px",
  color: "#8c8c8c",
};

interface FieldProps {
  label: string;
  children: ReactNode;
  className?: string;
  rightLabel?: string;
}

export const Field = ({
  label,
  children,
  className = "w-full",
  rightLabel,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center justify-between">
      <Typography.Text style={labelStyle}>{label}</Typography.Text>
      {rightLabel && (
        <Typography.Text style={rightLabelStyle}>{rightLabel}</Typography.Text>
      )}
    </div>
    {children}
  </div>
);

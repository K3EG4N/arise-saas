import type { IPageHeader } from "@/interfaces/ui/IPageHader";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export const PageHeader = ({
  title,
  description,
  breadcrumbItems,
}: IPageHeader) => {
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <HomeOutlined className="cursor-pointer" />,
            onClick: () => {
              navigate("/");
            },
          },
          ...breadcrumbItems.map((item) => ({
            title: item.title,
            onClick: item.onClick,
          })),
        ]}
        style={{ fontSize: 13 }}
      />
      <div>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
    </>
  );
};

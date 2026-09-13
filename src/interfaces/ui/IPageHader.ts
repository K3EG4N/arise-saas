export interface IPageHeader {
  title: string;
  description: string;
  breadcrumbItems: {
    title: string;
    onClick?: () => void;
  }[];
}

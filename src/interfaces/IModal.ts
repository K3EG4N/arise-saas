export interface IModal {
  title: string;
  description?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

export interface IDrawer {
  title: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  primaryButtonLabel?: string;
  onSuccess?: () => void;
}

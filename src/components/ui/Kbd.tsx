type KbdProps = {
  children: React.ReactNode;
};

export const Kbd = ({ children }: KbdProps) => (
  <kbd className="inline-flex h-6.5 min-w-6 items-center justify-center rounded border border-gray-300 bg-gray-50 px-2 text-xs font-medium text-gray-600 shadow-xs">
    {children}
  </kbd>
);

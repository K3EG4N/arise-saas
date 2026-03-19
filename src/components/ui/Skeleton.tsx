export const Skeleton = ({ className }: { className?: string }) => (
  <span
    className={`inline-block animate-pulse rounded-md bg-gray-200 ${className}`}
  />
);

export const BreadCrum = ({ items }: { items: string[] }) => {
  return (
    <nav className="flex items-center text-sm">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span
            className={
              index === items.length - 1
                ? "font-medium text-stone-700"
                : "text-stone-400"
            }
          >
            {item}
          </span>
          {index < items.length - 1 && (
            <span className="mx-1.5 font-medium text-stone-400">{">"}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export const BreadCrum = ({ items }: { items: string[] }) => {
  return (
    <nav className="text-sm flex items-center">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span
            className={
              index === items.length - 1 ? "text-stone-700 font-medium" : "text-stone-400"
            }
          >
            {item}
          </span>
          {index < items.length - 1 && (
            <span className="text-stone-400 mx-1.5 font-medium">{">"}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

import { Input, useRenderIcon } from "arise-ui";

export const Search = () => {
  const { getIconByName } = useRenderIcon();
  return (
    <section className="flex w-full gap-1">
      <Input
        placeholder="Search anything"
        icon={getIconByName("searcher", "size-4 stroke-2")?.icon}
        iconPosition="left"
        // onChange={(v) => onSearch?.(v)}
      />
    </section>
  );
};

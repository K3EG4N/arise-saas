import { Searcher } from "@/icons/Search";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const Search = () => {
  return (
    <section className="w-full flex gap-1">
      <Input placeholder="Type to search ..."/>
      {/* <div>
        <Button icon={<Searcher />} iconPosition="left" />
      </div> */}
    </section>
  );
};

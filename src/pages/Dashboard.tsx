import { Button, Input } from "arise-ui";

export const Dashboard = () => {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Input />
      <Button label="Press" appareance="primary"/>
    </div>
  );
};

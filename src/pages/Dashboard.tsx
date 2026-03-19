import { ComboBox } from "@/components/ui/ComboBox";

export const Dashboard = () => {
  const animals = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
  ];

  const pageSizeOptions = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
  ];

  return (
    <div className="w-40">
      <ComboBox options={animals} />
      <ComboBox options={pageSizeOptions} />
    </div>
  );
};

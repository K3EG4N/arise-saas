import { ComboBox } from "@/components/ui/ComboBox";
import { Drawer } from "@/components/ui/Drawer";
import { DropZone } from "@/components/ui/DropZone";
import { Input } from "@/components/ui/Input";
import type { IComboBoxOption } from "@/interfaces/IComboBox";

interface ICreateEmployeeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateEmployee = ({ isOpen, onClose }: ICreateEmployeeProps) => {
  const genderOptions: IComboBoxOption[] = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <Drawer
      title="Create User"
      description="Register a new user and assign them to a role."
      primaryButtonLabel="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSuccess={() => console.log("User created!")}
    >
      <span className="mb-2 inline-block text-xs font-medium text-neutral-600 uppercase">
        Image Profile
      </span>
      <div className="h-44">
        <DropZone />
      </div>
      <span className="my-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Personal Information
      </span>
      <div className="mb-2 flex flex-col gap-2">
        <Input title="Name" />
        <Input title="Last Name" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input title="Dni" />
        <Input title="Phone" />
      </div>
      <div className="mt-2">
        <ComboBox options={genderOptions} title="Gender" />
      </div>
      <span className="my-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Employment information
      </span>
      <div className="mb-2 flex flex-col gap-2">
        <Input title="Name" />
        <Input title="Last Name" />
      </div>
      <div className="mt-2">
        <ComboBox options={genderOptions} title="State" />
      </div>
    </Drawer>
  );
};

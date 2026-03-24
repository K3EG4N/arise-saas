import {
  ComboBox,
  DatePicker,
  DropZone,
  Input,
  Modal,
  type IComboBoxOption,
} from "arise-ui";

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
    <Modal
      title="Create User"
      description="Register a new user and assign them to a role."
      isOpen={isOpen}
      onClose={onClose}
    >
      <span className="mb-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Personal Information
      </span>
      <div className="flex justify-between gap-3">
        <div className="inline-block h-45 w-[50%]">
          <DropZone />
        </div>
        <div className="flex w-[50%] flex-col gap-[5.5px]">
          <Input title="Name" />
          <Input title="Last Name" />
          <Input title="Dni" />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Input title="Phone" />
        <ComboBox options={genderOptions} title="Gender" />
      </div>
      <span className="my-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Employment information
      </span>
      <div className="mb-2 flex flex-col gap-2">
        <DatePicker title="Birthday" />
        <Input title="Code" />
        {/* <ComboBox options={genderOptions} title="User" /> */}
      </div>
    </Modal>
  );
};

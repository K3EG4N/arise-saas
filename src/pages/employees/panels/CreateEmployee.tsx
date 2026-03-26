import { useDepartmentOptions } from "@/hooks/department/useDepartmentOptions";
import { ComboBox, DatePicker, DropZone, Input, Modal } from "arise-ui";
import { useEffect } from "react";
import { useCreateEmployee } from "../hooks/useCreateEmployee";
import { GENDER_OPTIONS } from "@/enums/Gender";

interface ICreateEmployeeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateEmployee = ({ isOpen, onClose }: ICreateEmployeeProps) => {
  const { getOptions, departmentOptions } = useDepartmentOptions();
  const { loading, request, createEmployee, setRequest } = useCreateEmployee();

  useEffect(() => {
    if (isOpen) {
      getOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal
      title="Create User"
      description="Register a new user and assign them to a role."
      isOpen={isOpen}
      onClose={onClose}
      onSuccess={createEmployee}
      loadingPhrases={["loading...", "Create Employee..."]}
      isLoading={loading}
    >
      <span className="mb-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Personal Information
      </span>
      <div className="flex justify-between gap-3">
        <div className="inline-block h-45 w-[50%]">
          <DropZone />
        </div>
        <div className="flex w-[50%] flex-col gap-[5.5px]">
          <Input
            title="Name"
            onChange={(v) => setRequest((prev) => ({ ...prev, name: v }))}
          />
          <Input
            title="Last Name"
            onChange={(v) => setRequest((prev) => ({ ...prev, lastName: v }))}
          />
          <Input
            title="Dni"
            onChange={(v) => setRequest((prev) => ({ ...prev, dni: v }))}
          />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Input
          title="Phone"
          onChange={(v) => setRequest((prev) => ({ ...prev, phone: v }))}
        />
        <ComboBox
          options={GENDER_OPTIONS}
          title="Gender"
          onSelect={(v) => setRequest((prev) => ({ ...prev, gender: v }))}
        />
      </div>
      <span className="my-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Employment information
      </span>
      <div className="mb-2 flex flex-col gap-2">
        <DatePicker
          title="Birthday"
          onSelectDate={(d) =>
            setRequest((prev) => ({ ...prev, birthDate: d as string }))
          }
          format={{ pattern: "YMD" }}
        />
        <ComboBox
          options={departmentOptions}
          title="Department"
          onSelect={(v) => setRequest((prev) => ({ ...prev, departmentId: v }))}
        />
      </div>
      <pre>{JSON.stringify(request, null, 2)}</pre>
    </Modal>
  );
};

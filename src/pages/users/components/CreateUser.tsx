import { useEmployeeOptions } from "@/hooks/employee/useEmployeeOptions";
import { ComboBox, Input, Modal, type IDisclosure } from "arise-ui";
import { useCreateUser } from "../hooks/useCreateUser";

export const CreateUser = ({ isOpen, onClose, reload }: IDisclosure) => {
  const { employeeOptions } = useEmployeeOptions();
  const { loading, request, response, createUser, setRequest } = useCreateUser(
    onClose,
    reload,
  );

  return (
    <Modal
      title="Create User"
      description="Create a user to allow your employees to access the system"
      isOpen={isOpen}
      onClose={onClose}
      primaryTextButton="Create"
      isLoading={loading}
      onSuccess={createUser}
      statusBanner={
        response && {
          status: response?.status as 200 | 400 | 500,
          description: response?.message,
          hidden: !response,
        }
      }
      disabledButton={
        !request?.employeeId || !request?.email || !request?.password
      }
    >
      <ComboBox
        title="Employee"
        placeholder="Select a employee"
        options={employeeOptions}
        onSelect={(v) => setRequest((prev) => ({ ...prev, employeeId: v }))}
      />

      <div className="my-4 flex justify-between gap-4">
        <Input
          title="Email"
          onChange={(v) => setRequest((prev) => ({ ...prev, email: v }))}
        />
        <Input
          title="Password"
          onChange={(v) => setRequest((prev) => ({ ...prev, password: v }))}
        />
      </div>
    </Modal>
  );
};

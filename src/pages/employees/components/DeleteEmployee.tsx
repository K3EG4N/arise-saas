import { Modal } from "arise-ui";
import type { IDeleteEmployeeModal } from "../interfaces/IEmployee";

export const DeleteEmployee = ({
  isOpen,
  onClose,
  //   reload,
  employee,
}: IDeleteEmployeeModal) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Delete Employee"
      primaryTextButton="Delete"
      onClose={onClose}
      onSuccess={() => {
        console.log("owo");
      }}
    >
      <p className="text-sm leading-relaxed text-pretty">
        Are you sure you want to delete{" "}
        <span className="font-medium">
          {employee?.fullName}
        </span>
        ? This action is permanent and cannot be undone.
      </p>
    </Modal>
  );
};

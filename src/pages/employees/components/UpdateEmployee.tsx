import { useEffect } from "react";
import { ComboBox, DatePicker, DropZone, Input, Modal } from "arise-ui";
import { GENDER_OPTIONS } from "@/enums/Gender";
import { useDepartmentOptions } from "@/hooks/department/useDepartmentOptions";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";
import type { IUpdateEmployeeModal } from "../interfaces/IEmployee";

export const UpdateEmployee = ({
  isOpen,
  reload,
  onClose,
  employee,
}: IUpdateEmployeeModal) => {
  const { departmentOptions } = useDepartmentOptions();
  const { loading, request, setRequest, response, updateEmployee } =
    useUpdateEmployee(onClose, reload);

  useEffect(() => {
    if (employee) {
      setRequest((prev) => ({
        ...prev,
        employeeId: employee.employeeId,
        name: employee.name,
        lastName: employee.lastName,
        dni: employee.dni,
        phone: employee.phone,
        gender: employee.genderId,
        departmentId: employee.departmentId,
        birthDate: employee.birthDate,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employee]);

  return (
    <Modal
      title="Update Employee"
      description="Update employee information and assign them to a department."
      isOpen={isOpen}
      onClose={onClose}
      onSuccess={updateEmployee}
      primaryTextButton="Update"
      loadingPhrases={["loading...", "Updating Employee..."]}
      isLoading={loading}
      disabledButton={
        !request.name ||
        !request.lastName ||
        !request.dni ||
        !request.departmentId ||
        !request.employeeId
      }
      statusBanner={
        response && {
          status: response?.status as 200 | 400 | 500,
          description: response?.message,
          hidden: !response,
        }
      }
    >
      <span className="mb-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Personal Information
      </span>
      <div className="flex justify-between gap-3">
        <div className="inline-block h-50 w-[50%]">
          <DropZone
            fileTypes={["png", "jpg", "jpe"]}
            onSubmit={(fileUpload) => {
              const file = Array.isArray(fileUpload)
                ? fileUpload[0]
                : fileUpload;
              setRequest((prev) => ({
                ...prev,
                file: {
                  name: file.name,
                  extension: file.extension,
                  fileData: file.fileData,
                },
              }));
            }}
          />
        </div>
        <div className="flex w-[50%] flex-col justify-between">
          <Input
            title="Name"
            defaultValue={request.name}
            onChange={(v) => setRequest((prev) => ({ ...prev, name: v }))}
          />
          <Input
            title="Last Name"
            defaultValue={request.lastName}
            onChange={(v) => setRequest((prev) => ({ ...prev, lastName: v }))}
          />
          <Input
            title="Dni"
            defaultValue={request.dni}
            onChange={(v) => setRequest((prev) => ({ ...prev, dni: v }))}
          />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Input
          title="Phone"
          defaultValue={request.phone}
          onChange={(v) => setRequest((prev) => ({ ...prev, phone: v }))}
        />
        <ComboBox
          title="Gender"
          options={GENDER_OPTIONS}
          defaultValue={request.gender}
          onSelect={(v) => setRequest((prev) => ({ ...prev, gender: v }))}
        />
      </div>
      <span className="my-3 inline-block text-xs font-medium text-neutral-600 uppercase">
        Employment information
      </span>
      <div className="mb-2 flex flex-col gap-4">
        <DatePicker
          title="Birthday"
          defaultValue={request.birthDate}
          format={{ pattern: "YMD" }}
          onSelectDate={(d) =>
            setRequest((prev) => ({ ...prev, birthDate: d as string }))
          }
        />
        <ComboBox
          title="Department"
          options={departmentOptions}
          defaultValue={request.departmentId}
          onSelect={(v) => setRequest((prev) => ({ ...prev, departmentId: v }))}
        />
      </div>
    </Modal>
  );
};

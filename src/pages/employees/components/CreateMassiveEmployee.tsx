import {
  Button,
  DropZone,
  Modal,
  useRenderIcon,
  type IDisclosure,
} from "arise-ui";

export const CreateMassiveEmployee = ({ isOpen, onClose }: IDisclosure) => {
  const { getIconByName } = useRenderIcon();

  return (
    <Modal
      title="Bulk Create Employees"
      description="Upload a file to register multiple employees at once."
      isOpen={isOpen}
      onClose={onClose}
      disabledButton
    >
      <div className="mb-3">
        <Button
          appareance="outline"
          label="Download Template"
          icon={getIconByName("downloadCloud")?.icon}
        />
      </div>
      <div className="h-50">
        <DropZone
          fileTypes={["xlsx", "csv"]}
          onSubmit={(e) => console.log(e)}
        />
      </div>
    </Modal>
  );
};

import { Button } from "@chakra-ui/react";

function ButtonBar(props) {
  const {
    toggleEdit = false,
    selectedProject,
    handlers: { handleEditTitle, handleAddProject },
  } = props;

  return (
    <div>
      {" "}
      {toggleEdit ? (
        <>
          <div className="project-selected-button-bar">
            {" "}
            <Button
              colorScheme="blue"
              isDisabled={selectedProject?.status === ""}
              onClick={handleEditTitle}
            >
              SAVE
            </Button>
          </div>
        </>
      ) : (
        <div className="project-selected-button-bar">
          <Button colorScheme="blue" onClick={handleEditTitle}>
            {" "}
            EDIT
          </Button>
          <Button colorScheme="green" onClick={handleAddProject}>
            {" "}
            ADD{" "}
          </Button>
          <Button colorScheme="red" onClick={handleEditTitle}>
            {" "}
            DELETE
          </Button>
        </div>
      )}
    </div>
  );
}
ButtonBar.propTypes = {
  toggleEdit: Boolean,
  selectedProject: { status: String },
  handlers: { handleEditTitle: Function, handleAddProject: Function },
};
export default ButtonBar;

import { Button } from "@chakra-ui/react";
import { useState } from "react";

function ButtonBar(props) {
  const [showAdd, setShowAdd] = useState(false);
  const {
    toggleEdit = false,
    selectedProject,
    handlers: {
      handleEditSelectedProject,
      handleCancelSelectedProject,
      handleClearSelectedProject,
      handleCRUD,
    },
  } = props;

  const handleOnClickClearButton = () => {
    handleClearSelectedProject();
  };
  const handleSave = () => {
    setShowAdd(true);
    handleEditSelectedProject();
  };
  const handleOnclickAdd = () => {
    setShowAdd(false);
    handleOnClickClearButton()
    handleCRUD("ADD_OR_UPDATE");
  };
  const handleDeleteClick =()=>{
    handleCRUD("DELETE")
    handleOnClickClearButton()
  }
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
              onClick={handleSave}
            >
              SAVE
            </Button>
            <Button colorScheme="orange" onClick={handleCancelSelectedProject}>
              CANCEL
            </Button>
            <Button colorScheme="yellow" onClick={handleOnClickClearButton}>
              CLEAR
            </Button>
          </div>
        </>
      ) : (
        <div className="project-selected-button-bar">
          <Button colorScheme="blue" onClick={handleEditSelectedProject}>
            {" "}
            {selectedProject.id ? 'EDIT': 'CREATE'}
          </Button>
          {showAdd && (
            <Button
              colorScheme="green"
              onClick={() => {
                handleOnclickAdd();
              }}
            >
              {" "}
              {!selectedProject.id ? "ADD" : "UPDATE"}
            </Button>
          )}
          <Button colorScheme="red" isDisabled={!selectedProject.id} onClick={() => handleDeleteClick() }>
            {" "}
            DELETE
          </Button>
          {selectedProject.id && (
            <Button colorScheme="yellow" onClick={handleOnClickClearButton}>
              CLEAR
            </Button>
          )}
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

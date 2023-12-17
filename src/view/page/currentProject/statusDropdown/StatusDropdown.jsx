import {
  Select,
} from "@chakra-ui/react";


function StatusDropdown({ handleChange, selectedProject }) {
  return (
    <Select
      placeholder="Select option"
      value={selectedProject?.status}
      onChange={(e) => {
        handleChange(e, "status");
      }}
    >
      <option value="To-do">To-do</option>
      <option value="In-progress">In-progress</option>
      <option value="Done">Done</option>
    </Select>
  );
}
StatusDropdown.propTypes = {
  handleChange: Function,
  selectedProject: {
    status: String,
  },
};
export default StatusDropdown;

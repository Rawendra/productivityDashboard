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
      <option value="todo">To-do</option>
      <option value="inprogress">In-progress</option>
      <option value="done">Done</option>
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

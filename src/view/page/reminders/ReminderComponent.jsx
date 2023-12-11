import Calender from "../../../components/calender/Calender";
import ReminderTask from "./ReminderTask";
import "./ReminderComponent.css";
function ReminderComponent() {
  return (
    <div className="reminder-component-container">
      
      <div>
        <Calender />
      </div>
      <div>
        <ReminderTask />
      </div>
    </div>
  );
}

export default ReminderComponent;

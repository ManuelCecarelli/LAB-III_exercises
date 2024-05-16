import PropTypes from "prop-types";
import Task from "../task/Task";

const TasksList = ({ tasksList }) => {

    return (
      <div className="d-flex-column">
        <h3>Mi lista de tareas:</h3>
        {tasksList.map(task => {
            return <Task taskName={task}/>
        })}
      </div>
    )
}

TasksList.propTypes = {
    tasksList: PropTypes.array
}

export default TasksList;
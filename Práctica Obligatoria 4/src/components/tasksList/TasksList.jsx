import PropTypes from "prop-types";
import PendantTask from "../pendantTask/PendantTask";
import CompletedTask from "../completedTask/CompletedTask";


const TasksList = ({ tasksList, onDeleteTask, onCompleteTask }) => {

  return ( 
    <div className="d-flex-column w-50">
        <h3 className="mx-2">{tasksList.length != 0 ? "Mi lista de tareas:" : "No hay tareas registradas"}</h3>
        {tasksList.map(task => {
          return task.completed == false
            ? <PendantTask
                key={task.id}
                taskName={task.name}
                onDeleteTask={onDeleteTask}
                onCompleteTask={onCompleteTask}
              />
            : <CompletedTask
                key={task.id}
                taskName={task.name}
                onDeleteTask={onDeleteTask}
              />
        })}
    </div>
  )
}

TasksList.propTypes = {
    tasksList: PropTypes.array,
    onDeleteTask: PropTypes.func,
    onCompleteTask: PropTypes.func
}

export default TasksList;
import { useState } from "react";
import NewTask from "./components/newTask/NewTask"
import TasksList from "./components/tasksList/TasksList"

const App = () => {

  const tasksList = [
    "Hacer las compras",
    "Bañar el perro",
    "Terminar el TPI de Laboratorio-III"
  ];

  const [newTasksList, setNewTasksList] = useState(tasksList);

  return (
    <div className="">
      <NewTask/>
      <TasksList tasksList={tasksList}/>
    </div>
  )
}

export default App

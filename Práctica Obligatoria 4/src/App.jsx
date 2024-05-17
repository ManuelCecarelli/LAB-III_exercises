import { useState } from "react";
import NewTask from "./components/newTask/NewTask"
import TasksList from "./components/tasksList/TasksList"

const App = () => {

  const tasksList = [
    {
      id: Math.random(),
      name: "Hacer las compras",
      completed: false,
    },
    {
      id: Math.random(),
      name: "Bañar el perro",
      completed: false,
    },
    {
      id: Math.random(),
      name: "Terminar el TPI de Laboratorio-III",
      completed: false,
    }
  ];

  const [newTasksList, setNewTasksList] = useState(tasksList);

  const addNewTask = (newTaskName) => {
    let auxiliarNewTask = {
      id: Math.random(),
      name: newTaskName,
      completed: false,
      deleted: false
    }
    let auxiliarNewTasksList = [...newTasksList, auxiliarNewTask];
    setNewTasksList(auxiliarNewTasksList);
  };

  const deleteTask = (taskName) => {
    let filteredTasksList = newTasksList.filter(task => task.name !== taskName);
    console.log(filteredTasksList)
    setNewTasksList(filteredTasksList);
  };

  const completeTask = (taskName) => {
    let filteredTasksList = newTasksList.filter(task => task.name == taskName);
    let auxiliarTask = filteredTasksList[0];
    let index = newTasksList.indexOf(auxiliarTask)
    let auxiliarNewTaskList = newTasksList.map(task => task);
    auxiliarNewTaskList[index].completed = true;
    setNewTasksList(auxiliarNewTaskList);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <NewTask onAddNewTask={addNewTask}/>
      <TasksList
        tasksList={newTasksList}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    </div>
  )
}

export default App

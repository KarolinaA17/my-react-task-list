import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export default function Task() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Do the housekeeping",
      description: "Clean the kitchen and bathrooms",
      priority: "High",
      status: true,
    },
    {
      id: 2,
      title: "Wash dirty clothes",
      description: "Separate white clothes from colored clothes",
      priority: "Medium",
      status: false,
    },
    {
      id: 3,
      title: "Do the Homework",
      description: "Do the Math and Naturals homework",
      priority: "Medium",
      status: false,
    },
    {
      id: 4,
      title: "Pass the notes",
      description: "Social Notes for evaluation",
      priority: "High",
      status: true,
    },
    {
      id: 5,
      title: "Make the weekly report",
      description: "Report presentation and graphics",
      priority: "Low",
      status: true,
    },
    {
      id: 6,
      title: "Review report",
      description: "expense and sales reports",
      priority: "Low",
      status: true,
    },
  ]);

  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  function updateTask(updatedTask) {
    console.log("Updating Task:", updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToUpdate(null);
    setIsEditing(false);
  }

  return (
    <>
      {tasks?.map((task, index) => (
        <TaskList
          key={index}
          taskProp={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          setTaskToUpdate={setTaskToUpdate}
        />
      ))}
      {taskToUpdate && isEditing && (
        <TaskForm
          taskToUpdate={taskToUpdate}
          updateTask={updateTask}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </>
  );
}

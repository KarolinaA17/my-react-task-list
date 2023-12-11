import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./forms/TaskForm";
import { useTaskActions } from "./Hook/HookPersonalizado";

export default function Task() {
  const initialTasks = [
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
  ];

  const { tasks, deleteTask, updateTask, createTask } =
    useTaskActions(initialTasks);

  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskCounter, setNewTaskCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCreateTask = (newTask) => {
    createTask({ ...newTask, id: `newTask-${newTaskCounter}` });
    setNewTaskCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <TaskForm
        onCreateTask={handleCreateTask}
        onUpdateTask={updateTask}
        taskToUpdate={taskToUpdate}
        onCancel={() => {
          setTaskToUpdate(null);
          setIsEditing(false);
        }}
      />

      {tasks?.map((task) => (
        <TaskList
          key={task.id}
          taskProp={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          setTaskToUpdate={setTaskToUpdate}
        />
      ))}
    </>
  );
}

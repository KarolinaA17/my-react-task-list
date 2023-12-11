import { useState, useEffect } from "react";

export const useTaskActions = (initialTasks) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks ? storedTasks : initialTasks;
  });

  const updateTask = (updatedTask) => {
    console.log("Updating task:", updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskToDelete) => {
    console.log("Deleting task:", taskToDelete);
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  const createTask = (newTask) => {
    console.log("Creating task:", newTask);
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    deleteTask,
    updateTask,
    createTask,
  };
};

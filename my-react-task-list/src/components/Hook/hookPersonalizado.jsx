import { useState, useEffect } from "react";

export const useTaskActions = (initialTasks) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks ? storedTasks : initialTasks;
  });

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  const createTask = (newTask) => {
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

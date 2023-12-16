import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./forms/TaskForm";
import { useTaskActions } from "./Hook/HookPersonalizado";

export default function Task({ selectedCategory, onCategoryChange }) {
  const initialTasks = [
    {
      id: 1,
      title: "Do the housekeeping",
      description: "Clean the kitchen and bathrooms",
      priority: "High",
      status: true,
      Category: "Housework",
    },
    {
      id: 2,
      title: "Wash dirty clothes",
      description: "Separate white clothes from colored clothes",
      priority: "Medium",
      status: false,
      Category: "Housework",
    },
    {
      id: 3,
      title: "Do the Homework",
      description: "Do the Math and Naturals homework",
      priority: "Medium",
      status: false,
      Category: "Study Tasks",
    },
    {
      id: 4,
      title: "Pass the notes",
      description: "Social Notes for evaluation",
      priority: "High",
      status: true,
      Category: "Study Tasks",
    },
    {
      id: 5,
      title: "Make the weekly report",
      description: "Report presentation and graphics",
      priority: "Low",
      status: true,
      Category: "Job Tasks",
    },
    {
      id: 6,
      title: "Review report",
      description: "expense and sales reports",
      priority: "Low",
      status: true,
      Category: "Job Tasks",
    },
  ];

  const { tasks, deleteTask, updateTask, createTask, setCategory, category } =
    useTaskActions(initialTasks, selectedCategory);
  const [newTaskCounter, setNewTaskCounter] = useState(initialTasks.length);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleCreateTask = (newTask) => {
    createTask({
      ...newTask,
      id: tasks.length + 1,
    });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };

  useEffect(() => {
    if (category !== selectedCategory) {
      setFilteredTasks(
        category ? tasks.filter((task) => task.Category === category) : tasks
      );
    }
  }, [category, tasks]);

  return (
    <>
      <TaskForm
        onCreateTask={handleCreateTask}
        onUpdateTask={updateTask}
        onCancel={() => setTaskToUpdate(null)}
      />
      {filteredTasks.map((task) => (
        <TaskList
          key={task.id}
          taskProp={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          setTaskToUpdate={setTaskToUpdate}
          onCategoryChange={handleCategoryChange}
        />
      ))}
    </>
  );
}

import React, { useState } from "react";
import TaskList from "./TaskList";

export default function Task() {
  const [tasks, setTasks] = useState([
    {
      title: "Do the housekeeping",
      description: "Clean the kitchen and bathrooms",
      priority: "High",
      status: true,
    },
    {
      title: "Wash dirty clothes",
      description: "Separate white clothes from colored clothes",
      priority: "Medium",
      status: false,
    },
    {
      title: "Do the Homework",
      description: "Do the Math and Naturals homework",
      priority: "Medium",
      status: false,
    },
    {
      title: "Pass the notes",
      description: "Social Notes for evaluation",
      priority: "High",
      status: true,
    },
    {
      title: "Make the weekly report",
      description: "Report presentation and graphics",
      priority: "Low",
      status: true,
    },
    {
      title: "Review report",
      description: "expense and sales reports",
      priority: "Low",
      status: true,
    },
  ]);
  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }
  return (
    <>
      {tasks?.map((task, index) => (
        <TaskList taskProp={task} deleteTask={deleteTask} key={index} />
      ))}
    </>
  );
}

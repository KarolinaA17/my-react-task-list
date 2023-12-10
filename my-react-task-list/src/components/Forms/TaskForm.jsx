import React, { useState } from "react";

export default function TaskForm({ onCreateTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleCreateTask = () => {
    if (taskTitle.length < 3) {
      setError("El título debe tener al menos 3 caracteres.");
      return;
    }

    setError("");

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      status: false,
    };

    onCreateTask(newTask);

    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("Medium");
  };

  return (
    <div>
      <h2>Create a New Task</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

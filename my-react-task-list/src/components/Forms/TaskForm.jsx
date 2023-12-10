import React, { useState } from "react";
import "../../styles/taskForm.css";
import "../../styles/textFormsCard.css";

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
      <div className="formCard">
        <div className="formColumnLeft">
          <label className="label">Title:</label>
          <label className="label">Description:</label>
          <label className="label">Priority:</label>
        </div>
        <div className="formColumnRight">
          <div>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div>
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
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
    </div>
  );
}

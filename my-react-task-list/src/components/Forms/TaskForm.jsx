import React, { useState } from "react";
import "../../styles/taskForm.css";
import "../../styles/textFormsCard.css";
import "../../styles/stylesButtons/createButton.css";

export default function TaskForm({ onCreateTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskCategory, setTaskCategory] = useState("Housework");
  const [error, setError] = useState("");

  const handleCreateTask = () => {
    if (taskTitle.length < 5 || taskDescription.length < 5) {
      setError("El título y la descripción deben tener al menos 5 caracteres.");
      alert("El título y la descripción deben tener al menos 5 caracteres.");
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
          <label className="label">Category:</label>
        </div>
        <div className="formColumnRight">
          <div className="input">
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="input"
              placeholder="Enter Text"
              required
            />
          </div>
          <div className="input">
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="input"
              placeholder="Enter Text"
              required
            />
          </div>
          <div>
            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
              className="selectField"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <select
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className="selectField"
            >
              <option value="Housework">Housework</option>
              <option value="Job Task">Job Task</option>
              <option value="Study Task">Study Task</option>
            </select>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="buttonCreate" onClick={handleCreateTask}>
          Create Task
        </button>
      </div>
    </div>
  );
}

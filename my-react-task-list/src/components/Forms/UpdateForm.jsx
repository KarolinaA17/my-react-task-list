import React, { useState, useEffect } from "react";
import "../../styles/stylesButtons/updateForm.css";
import "../../styles/stylesButtons/cancelForm.css";

export default function UpdateForm({ taskToUpdate, updateTask, onCancel }) {
  const [editedTask, setEditedTask] = useState({ ...taskToUpdate });

  useEffect(() => {
    setEditedTask(taskToUpdate);
  }, [taskToUpdate]);

  const handleInputChange = (e, field) => {
    setEditedTask((prevEditedTask) => ({
      ...prevEditedTask,
      [field]: e.target.value,
    }));
  };

  const handleUpdateClick = () => {
    console.log("Update button clicked");
    console.log("Current editedTask:", editedTask);
    updateTask(editedTask);
    onCancel();
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={editedTask.title}
        onChange={(e) => handleInputChange(e, "title")}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={editedTask.description}
        onChange={(e) => handleInputChange(e, "description")}
      />
      <label htmlFor="priority">Priority:</label>
      <input
        type="text"
        id="priority"
        value={editedTask.priority}
        onChange={(e) => handleInputChange(e, "priority")}
      />
      <button className="updateForm" onClick={handleUpdateClick}>
        <span className="IconContainer">
          <svg viewBox="0 0 384 512" height="0.9em" className="icon">
            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
          </svg>
        </span>
        <p className="text">Save</p>
      </button>

      <button className="cancelForm" onClick={onCancel}>
        <span className="iconCancel"></span>
        <span className="textCancel">Cancelar</span>
      </button>
    </div>
  );
}

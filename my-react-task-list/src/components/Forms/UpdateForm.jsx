import React, { useState, useEffect } from "react";

export default function updateForm({ taskToUpdate, updateTask, onCancel }) {
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
      <button onClick={handleUpdateClick}>Guardar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../../styles/updateForm.css";
import "../../styles/textUpdateForm.css";
import "../../styles/stylesButtons/updateForm.css";
import "../../styles/stylesButtons/cancelForm.css";

export default function UpdateForm({ taskToUpdate, updateTask, onCancel }) {
  const [editedTask, setEditedTask] = useState({ ...taskToUpdate });
  const [taskPriority, setTaskPriority] = useState(editedTask.priority);
  const [taskCategory, setTaskCategory] = useState(editedTask.Category);
  useEffect(() => {
    setEditedTask(taskToUpdate);
    setTaskPriority(taskToUpdate.priority);
  }, [taskToUpdate]);

  const handleInputChange = (e, field) => {
    setEditedTask((prevEditedTask) => ({
      ...prevEditedTask,
      [field]: e.target.value,
    }));
  };
  const handlePriorityChange = (e) => {
    setTaskPriority(e.target.value);
  };

  const handleUpdateClick = () => {
    if (editedTask.title.length < 5 || editedTask.description.length < 5) {
      alert("El título y la descripción deben tener al menos 5 caracteres.");
      return;
    }

    const updatedTask = {
      ...editedTask,
      priority: taskPriority,
      Category: taskCategory,
    };

    updateTask(updatedTask);
    onCancel();
  };

  const handleCategoryChange = (e) => {
    if (e && e.target) {
      setTaskCategory(e.target.value);
    } else {
      console.error("Error: No se pudo obtener el valor de la categoría");
    }
  };

  return (
    <div className="formCardUpdate">
      <div className="columnLeftUpdate">
        <label className="labelUpdate" htmlFor="title">
          Title:
        </label>
        <label className="labelUpdate" htmlFor="description">
          Description:
        </label>
        <label className="labelUpdate" htmlFor="priority">
          Priority:
        </label>
        <label className="labelUpdate" htmlFor="Category">
          Category:
        </label>
      </div>
      <div className="columnRightUpdate">
        <input
          className="inputFieldUpdate"
          type="text"
          id="title"
          value={editedTask.title}
          onChange={(e) => handleInputChange(e, "title")}
        />
        <input
          className="inputFieldUpdate"
          type="text"
          id="description"
          value={editedTask.description}
          onChange={(e) => handleInputChange(e, "description")}
        />
        <select
          value={taskPriority}
          onChange={handlePriorityChange}
          className="selectFieldUpdate"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={taskCategory}
          onChange={(e) => handleCategoryChange(e)}
          className="selectFieldUpdate"
        >
          <option value="Housework">Housework</option>
          <option value="Job Task">Job Task</option>
          <option value="Study Task">Study Task</option>
        </select>
      </div>
      <div className="formButtons">
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
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../styles/cardTask.css";
import DeleteButton from "./buttons/delete";
import CompleteButton from "./buttons/complete";
import UpdateButton from "./buttons/update";
import UpdateForm from "./forms/UpdateForm";

export default function TaskList(props) {
  const { taskProp, deleteTask, updateTask, setTaskToUpdate } = props;
  const { id, title, description, priority, status } = taskProp;
  const [completed, setCompleted] = useState(status);
  const [isEditing, setIsEditing] = useState(false);

  const handleCompleteClick = () => {
    const updatedTask = { ...taskProp, status: !completed };
    setCompleted(!completed);
    updateTask(updatedTask);
  };

  useEffect(() => {
    setCompleted(status);
  }, [status]);

  const handleDeleteClick = () => {
    deleteTask(taskProp);
  };

  const handleUpdateClick = () => {
    setTaskToUpdate(taskProp);
    setIsEditing(true);
  };

  const handleSaveUpdate = (updatedTask) => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <article key={id}>
      <div className={`taskCard ${completed ? "completed" : "notCompleted"}`}>
        <>
          {!isEditing ? (
            <>
              <h2 className="sTitle">{title}</h2>

              <div
                className={`columnaLeft ${
                  completed ? "completedItem" : "notCompletedItem"
                }`}
              >
                <div className="item">Description:</div>
                <div className="item">Priority:</div>
                <div className="item">Status:</div>
              </div>
              <div
                className={`columnaCenter ${
                  completed ? "completedDItem" : "notCompletedDItem"
                }`}
              >
                <div className="dItem">{description}</div>
                <div className="dItem">{priority}</div>
                <div className="dItem">{completed ? "True" : "False"}</div>
              </div>
              <div className="columnaRight">
                <div>
                  <DeleteButton deleteTask={handleDeleteClick} />
                </div>
                <div>
                  <UpdateButton onClick={handleUpdateClick} />
                </div>
                <div>
                  <CompleteButton
                    completed={completed}
                    onToggleComplete={handleCompleteClick}
                  />
                </div>
              </div>
            </>
          ) : null}

          {isEditing && (
            <UpdateForm
              taskToUpdate={taskProp}
              updateTask={handleSaveUpdate}
              onCancel={() => setIsEditing(false)}
            />
          )}
        </>
      </div>
    </article>
  );
}

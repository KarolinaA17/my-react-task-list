import React, { useState } from "react";
import "../styles/cardTask.css";
import DeleteButton from "./buttons/delete";
import CompleteButton from "./buttons/complete";
import UpdateButton from "./buttons/update";
import TaskForm from "./TaskForm";

export default function TaskList(props) {
  const { taskProp, deleteTask, updateTask, setTaskToUpdate } = props;
  const { title, description, priority } = taskProp;
  const [completed, setCompleted] = useState(taskProp.status);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateClick = () => {
    console.log("Task to update:", { ...taskProp });
    setTaskToUpdate(taskProp);
    setIsEditing(true);
  };

  const handleCompleteClick = () => {
    setCompleted(!completed);
  };

  return (
    <article>
      <div className={`taskCard ${completed ? "completed" : "notCompleted"}`}>
        {isEditing && (
          <TaskForm
            taskToUpdate={taskProp}
            updateTask={updateTask}
            onCancel={() => setIsEditing(false)}
          />
        )}
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
              <DeleteButton deleteTask={() => deleteTask(taskProp)} />
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
      </div>
    </article>
  );
}

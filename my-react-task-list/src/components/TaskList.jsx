import React, { useState } from "react";
import "../styles/cardTask.css";
import DeleteButton from "./buttons/delete";
import CompleteButton from "./buttons/complete";
import UpdateButton from "./buttons/update";

export default function TaskList(props) {
  const { id, title, description, priority } = props.taskProp;
  const [completed, setCompleted] = useState(props.taskProp.status);
  const handleCompleteClick = () => {
    setCompleted(!completed);
    props.onStatusChange(id, !completed);
  };

  return (
    <article>
      <div className={`taskCard ${completed ? "completed" : "notCompleted"}`}>
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
            <DeleteButton />
          </div>
          <div>
            <UpdateButton />
          </div>
          <div>
            <CompleteButton
              completed={completed}
              onClick={handleCompleteClick}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

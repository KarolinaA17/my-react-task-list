import React from "react";
import "../styles/cardTask.css";
import DeleteButton from "./buttons/delete";
import CompleteButton from "./buttons/complete";
import UpdateButton from "./buttons/update";

export default function TaskList(props) {
  const { title, description, priority, status } = props.taskProp;

  return (
    <article>
      <div className={status ? "taskCard completed" : "taskCard notCompleted"}>
        <h2 className="sTitle">{title}</h2>
        <div className="columnaLeft">
          <div className="item">Description:</div>
          <div className="item">Priority:</div>
          <div className="item">Status:</div>
        </div>
        <div className="columnaCenter">
          <div className="dItem">{description}</div>
          <div className="dItem">{priority}</div>
          <div className="dItem">{status ? "True" : "False"}</div>
        </div>
        <div className="columnaRight">
          <div className="deleteButton">
            <DeleteButton />
          </div>
          <div>
            <UpdateButton />
          </div>
          <div>
            <CompleteButton />
          </div>
        </div>
      </div>
    </article>
  );
}

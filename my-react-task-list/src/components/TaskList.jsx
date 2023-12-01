import React from "react";
import "../styles/cardTask.css";

export default function TaskList(props) {
  const { title, description, priority, status } = props.taskProp;

  return (
    <article>
      <div className="taskCard">
        <div>
          <h2 className="sTitle">{title}</h2>
        </div>
        <div class="columna">
          <div class="item">Description:</div>
          <div class="dItem">{description}</div>

          <div class="item">Priority:</div>
          <div class="dItem">{priority}</div>

          <div class="item">Status:</div>
          <div class="dItem">{status ? "True" : "False"}</div>
        </div>
      </div>
    </article>
  );
}

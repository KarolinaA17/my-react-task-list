import React from "react";
import "../styles/cardTask.css";

export default function TaskList(props) {
  const { title, description, priority, status } = props.taskProp;

  return (
    <article className="taskCard">
      <h2 className="subTitle">{title}</h2>
      <p>Description:{description}</p>
      <p>Priority:{priority}</p>
      <p>Status:{status}</p>
    </article>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylesButtons/deleteButton.css";

export default function DeleteButton(props) {
  function handleClick() {
    props.deleteTask(props.taskToDelete);
  }

  return (
    <button className="delete-button" onClick={handleClick}>
      <FontAwesomeIcon className="delete-svgIcon" icon={faTrashAlt} />
    </button>
  );
}

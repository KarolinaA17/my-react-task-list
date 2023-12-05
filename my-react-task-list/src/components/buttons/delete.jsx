import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton(props) {
  function handleClick() {
    props.deleteTask(props.taskToDelete);
  }

  return (
    <button className="deleteButton" onClick={handleClick}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

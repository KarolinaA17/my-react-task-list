import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton(props) {
  function handlenClick() {
    props.setTasks();
  }

  return (
    <button className="deleteButton" onClick={handlenClick}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

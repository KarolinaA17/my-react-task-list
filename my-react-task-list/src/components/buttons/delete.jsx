import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton() {
  return (
    <button className="deleteButton">
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

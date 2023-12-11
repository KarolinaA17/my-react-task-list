import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylesButtons/updateButton.css";

export default function UpdateButton({ onClick }) {
  return (
    <button className="updateButton" onClick={onClick}>
      <FontAwesomeIcon icon={faPen} />
    </button>
  );
}

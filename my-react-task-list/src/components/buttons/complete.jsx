import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylebuttons.css";
import "../../styles/cardTask.css";

export default function CompleteButton({ completed, onToggleComplete }) {
  const handleCompleteClick = () => {
    onToggleComplete();
  };
  return (
    <button
      className={`completeButton ${completed ? "completed" : "notCompleted"}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={completed ? faCheckCircle : faCircle} />
    </button>
  );
}
const handleCompleteClick = () => {
  setCompleted(!completed);
  props.onStatusChange(!completed);
};

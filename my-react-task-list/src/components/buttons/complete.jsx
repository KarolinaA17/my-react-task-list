import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stylesButtons/completeButton.css";
import "../../styles/cardTask.css";

export default function CompleteButton({ completed, onToggleComplete }) {
  const handleCompleteClick = () => {
    if (onToggleComplete) {
      onToggleComplete();
    }
  };

  return (
    <label className={`container ${completed ? "completed" : "notCompleted"}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCompleteClick}
        className="hidden-checkbox"
      />
      <div className="checkmark">
        <FontAwesomeIcon icon={completed ? faCheckCircle : faCircle} />
      </div>
    </label>
  );
}

import React, { useState } from "react";
import "../styles/cardTask.css";
import DeleteButton from "./buttons/delete";
import CompleteButton from "./buttons/complete";
import UpdateButton from "./buttons/update";

export default function TaskList(props) {
  const { id, title, description, priority } = props.taskProp;

  // Estado para controlar si la tarea está completada o no
  const [completed, setCompleted] = useState(props.taskProp.status);

  // Función para manejar el clic en el botón de completado
  const handleCompleteClick = () => {
    // Cambiar el estado de completado al contrario
    setCompleted(!completed);

    // Actualizar el estado 'status' al contrario
    props.onStatusChange(id, !completed);
  };

  return (
    <article>
      <div className={`taskCard ${completed ? "completed" : "notCompleted"}`}>
        <h2 className="sTitle">{title}</h2>
        <div
          className={`columnaLeft ${
            completed ? "completedItem" : "notCompletedItem"
          }`}
        >
          <div className="item">Description:</div>
          <div className="item">Priority:</div>
          <div className="item">Status:</div>
        </div>
        <div
          className={`columnaCenter ${
            completed ? "completedDItem" : "notCompletedDItem"
          }`}
        >
          <div className="dItem">{description}</div>
          <div className="dItem">{priority}</div>
          <div className="dItem">{completed ? "True" : "False"}</div>
        </div>
        <div className="columnaRight">
          <div>
            <DeleteButton />
          </div>
          <div>
            <UpdateButton />
          </div>
          <div>
            {/* Pasar el estado y la función de clic como propiedades */}
            <CompleteButton
              completed={completed}
              onClick={handleCompleteClick}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

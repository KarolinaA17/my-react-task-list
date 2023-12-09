import React from "react";

export default function DeleteLocalStorage() {
  function handleLimpiarLocalStorageClick() {
    localStorage.removeItem("tasks");
  }

  return (
    <div>
      <button onClick={handleLimpiarLocalStorageClick}>
        Limpiar localStorage
      </button>
    </div>
  );
}

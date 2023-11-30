import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Task from "./components/Task";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Header />
      <Task />
    </div>
  </React.StrictMode>
);

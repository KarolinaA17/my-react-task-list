import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import DeleteLocalStorage from "./components/DeleteLocalStorage";
import Menu from "./components/menu";
import Task from "./components/Task";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <React.StrictMode>
      <div>
        <Menu onCategoryChange={handleCategoryChange} />
        <Header />
        <DeleteLocalStorage />
        <Task
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);

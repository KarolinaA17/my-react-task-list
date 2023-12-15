import React from "react";
import { Box, Button, Icon } from "@chakra-ui/react";
import { FiUser, FiHome, FiBriefcase, FiBook, FiBell } from "react-icons/fi";

const Menu = ({ onCategoryChange }) => {
  const menuItems = [
    { icon: FiUser, label: "My To Do List" },
    { icon: FiHome, label: "Housework" },
    { icon: FiBriefcase, label: "Job Tasks" },
    { icon: FiBook, label: "Study Tasks" },
  ];

  const handleCategoryChange = (category) => {
    console.log(`Categoría seleccionada: ${category}`);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-end"
      borderRadius="5px"
      margin="30px"
    >
      {menuItems.map((item, index) => (
        <Button
          key={index}
          className="value"
          variant="unstyled"
          padding="10px"
          marginRight="15px"
          color="black"
          backgroundColor="#AFAFAF"
          display="flex"
          position="relative"
          gap="10px"
          cursor="pointer"
          borderRadius="4px"
          _hover={{ color: "white", backgroundColor: "#B509EB" }}
          _focus={{ backgroundColor: "#B543EB", outline: "none" }}
          onClick={() =>
            handleCategoryChange(
              item.label === "My To Do List" ? null : item.label
            )
          }
        >
          <Icon as={item.icon} />
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;

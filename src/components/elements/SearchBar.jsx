import React, { useState } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [notMatch, setNotMatch] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search");

  const navigateTo = (route) => {
    window.location.href = route;
  };
  

  const handleSearch = (e) => {
    if (e.key === "Enter") {
        const query = e.target.value.toLowerCase();
        switch (query) {
          case "dashboard":
            navigateTo("/dashboard");
            break;
          case "consult":
            navigateTo("/patient/consult");
            break;
          case "timeline":
            navigateTo("/patient/timeline");
            break;
          case "scan":
            navigateTo("/patient/scan");
            break;
          case "help":
            navigateTo("/help");
            break;
          default:
            setNotMatch(true);
            setPlaceholder("Not found");
            e.target.value = ""; // Clear the input field
            break;
        }
      }
  };

  const handleFocus = () => {
    if (notMatch) {
      setNotMatch(false);
      setPlaceholder("Search");
    }
  };

  return (
    <Box width={"35%"}>
      <InputGroup
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <InputLeftElement pointerEvents="none" m={0} mt={1}>
          <CiSearch size={30} />
        </InputLeftElement>
        <Input
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          size={"lg"}
          type="tel"
          placeholder={placeholder}
          bg={"gray.100"}
          borderRadius={10}
          opacity={0.75}
          onKeyDown={handleSearch} // Listen for keydown event
          onFocus={handleFocus}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;

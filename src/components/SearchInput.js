import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

const SearchInput = () => {
  return (
    <div style={searchStyle}>
      <div style={searchInputStyle}>
        <input style={inputStyle} type="text" placeholder="#Explore" />
        <div style={searchIconStyle}>
          <UilSearch style={searchIconHoverStyle} />
        </div>
      </div>
    </div>
  );
};

const searchStyle = {
  display: "flex",
  gap: "0.75rem",
};

const searchInputStyle = {
  display: "flex",
  backgroundColor: "var(--inputColor)",
  borderRadius: "10px",
  padding: "5px",
};

const inputStyle = {
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
};

const searchIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(106.23deg, #f99827, #f95f35 100%)",
  borderRadius: "5px",
  padding: "4px",
  color: "white",
};

const searchIconHoverStyle = {
  cursor: "pointer",
};

export default SearchInput;

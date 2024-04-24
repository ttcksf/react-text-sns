import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

const SearchInput = () => {
  return (
    <div style={searchStyle}>
      <div style={searchInputStyle}>
        <input style={inputStyle} type="text" placeholder="検索" />
        <div style={searchIconStyle}>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

const searchStyle = {
  width: "100%",
  padding: "1rem",
};

const searchInputStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "var(--white)",
  border: "4px solid var(--defaultPurple)",
  borderRadius: "8px",
  padding: "4px",
  boxShadow: "4px 4px 16px var(--lightPurple)",
};

const inputStyle = {
  backgroundColor: "transparent",
  width: "100%",
  border: "none",
  outline: "none",
};

const searchIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--defaultPurple)",
  borderRadius: "4px",
  padding: "4px",
  color: "var(--white)",
  cursor: "pointer",
};

export default SearchInput;

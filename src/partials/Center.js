import React from "react";
import PostArchive from "../components/PostArchive";
import PostForm from "../components/PostForm";

const Center = () => {
  return (
    <div style={centerStyle}>
      <PostArchive />
    </div>
  );
};
const centerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "100vh",
  overflow: "auto",
};
export default Center;

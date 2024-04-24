import React from "react";

import CategoryCard from "../components/CategoryCard";
import PostForm from "../components/PostForm";

const LeftSide = () => {
  return (
    <div style={leftSideStyle}>
      <PostForm />
      <CategoryCard />
    </div>
  );
};
const leftSideStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  paddingTop: "320px",
};

export default LeftSide;

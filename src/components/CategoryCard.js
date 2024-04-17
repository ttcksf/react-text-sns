import React from "react";
import { localCategoryData } from "../localData/localCategoryData";

const CategoryCard = () => {
  return (
    <div style={categoriesStyle}>
      <h3>Trends for you</h3>
      {localCategoryData.map((cat, index) => {
        return (
          <div key={index} style={categoryStyle}>
            <span style={categoryNameStyle}>{cat.name}</span>
            <span style={categoryPostsStyle}>{cat.posts}件</span>
          </div>
        );
      })}
    </div>
  );
};

const categoriesStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "var(--cardColor)",
  padding: "1rem",
  borderRadius: "1rem",
  paddingLeft: "2rem",
};

const categoryStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const categoryNameStyle = {
  fontWeight: "bold",
};

const categoryPostsStyle = {
  fontSize: "13px",
};

export default CategoryCard;

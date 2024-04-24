import React from "react";
import { UilSetting, UilChatInfo } from "@iconscout/react-unicons";
import {
  UisHouseUser,
  UisExclamationCircle,
} from "@iconscout/react-unicons-solid";
import CategoryCard from "../components/CategoryCard";

const LeftSide = () => {
  return (
    <div style={leftSideStyle}>
      <div style={navIconsStyle}>
        <UisHouseUser style={navIconImgStyle} />
        <UilSetting style={navIconImgStyle} />
        <UisExclamationCircle style={navIconImgStyle} />
        <UilChatInfo style={navIconImgStyle} />
      </div>
      <CategoryCard />
    </div>
  );
};
const leftSideStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};
const navIconsStyle = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
};

const navIconImgStyle = {
  width: "1.5rem",
  height: "1.5rem",
};

export default LeftSide;

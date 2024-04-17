import React from "react";
import SearchInput from "../components/SearchInput";
import ProfileCard from "../components/ProfileCard";
import FollowersCard from "../components/FollowerCard";

const RightSide = () => {
  return (
    <div style={rightMenusStyle}>
      <SearchInput />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

const rightMenusStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  overFlow: "auto",
};

export default RightSide;

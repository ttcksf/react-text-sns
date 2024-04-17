import React from "react";
import LeftSide from "../../partials/LeftSide";
import Center from "../../partials/Center";
import RightSide from "../../partials/RightSide";

const Top = () => {
  return (
    <>
      <div style={topGridStyle}>
        <LeftSide />
        <Center />
        <RightSide />
      </div>
    </>
  );
};

const topGridStyle = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "18rem auto 20rem",
  gap: "1rem",
};

export default Top;

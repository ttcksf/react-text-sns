import React from "react";
import { localFollowerCard } from "../localData/localFollowersData";

const FollowerCard = () => {
  return (
    <div style={followerCardStyle}>
      <h3>Who is following you</h3>

      {localFollowerCard.map((follower, index) => {
        return (
          <div style={followerStyle} key={index}>
            <div>
              <img src={follower.img} alt="" style={followerImageStyle} />
              <div style={followerNameStyle}>
                <span>{follower.accountName}</span>
                <span>@{follower.userName}</span>
              </div>
            </div>
            <button style={followBtnStyle}>Follow</button>
          </div>
        );
      })}
    </div>
  );
};

const followerCardStyle = {
  width: "100%",
  borderRadius: "0.7rem",
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  fontSize: "13px",
};

const followerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const followerImageStyle = {
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "50%",
};

const followerNameStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};

const followBtnStyle = {
  height: "2rem",
  paddingLeft: "20px",
  paddingRight: "20px",
};

export default FollowerCard;

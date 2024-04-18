import React from "react";
import { localFollowerCard } from "../localData/localFollowersData";

const FollowerCard = () => {
  return (
    <div style={followerCardStyle}>
      <h3>フォロワー</h3>

      {localFollowerCard.map((follower, index) => {
        return (
          <div style={followerStyle} key={index}>
            <img src={follower.img} alt="" style={followerImageStyle} />
            <div style={followerNameStyle}>
              <span>{follower.accountName}</span>
              <span>@{follower.userName}</span>
            </div>
            <button className="button">フォロー中</button>
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
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};
export default FollowerCard;

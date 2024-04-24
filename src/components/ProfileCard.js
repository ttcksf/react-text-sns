import React, { useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./ProfileModal";

const ProfileCard = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <div style={profileCard}>
      <div style={profileContents}>
        <h4>アカウント情報</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setIsModalOpened(true)}
            className="iconHover"
          />
          <ProfileModal
            isModalOpened={isModalOpened}
            setIsModalOpened={setIsModalOpened}
          />
        </div>
      </div>
      <div>
        <span>
          <b>エリア：</b>
        </span>
        <span>大阪</span>
      </div>
      <div>
        <span>
          <b>推しメン：</b>
        </span>
        <span>乃木咲 愛美子</span>
      </div>

      <button className="button">ログアウト</button>
    </div>
  );
};

const profileCard = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "var(--defaultPurple)",
  padding: "1rem",
  borderRadius: "1rem",
  color: "var(--white)",
  fontWeight: "bold",
  fontSize: "1rem",
  width: "90%",
  boxShadow: "4px 4px 16px var(--lightPurple)",
};

const profileContents = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
};

export default ProfileCard;

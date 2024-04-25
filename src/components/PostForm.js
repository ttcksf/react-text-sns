import React, { useRef, useState } from "react";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import profIcon from "../images/user-circle.svg";

const PostForm = () => {
  const [attachment, setAttachment] = useState(null);
  const inputRef = useRef();

  const onAttachmentImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setAttachment({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div style={postFormStyle}>
      <img style={profIconStyle} src={profIcon} alt="" />
      <div style={formBoxStyle}>
        <textarea
          style={inputTextStyle}
          placeholder="投稿してください"
        ></textarea>
        <div style={attachmentStyle}>
          <div style={attachmentIcon} onClick={() => inputRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div style={attachmentIcon}>
            <UilPlayCircle />
            Video
          </div>
          <button className="button">投稿</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={inputRef}
              onChange={onAttachmentImage}
            />
          </div>
        </div>
        {attachment && (
          <div style={previewStyle}>
            <UilTimes onClick={() => setAttachment(null)} />
            <img style={previewImageStyle} src={attachment.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

const postFormStyle = {
  display: "flex",
  gap: "1rem",
  backgroundColor: "var(--defaultPurple)",
  padding: "1rem",
  borderRadius: "1rem",
  width: "32rem",
  height: "320px",
};

const profIconStyle = {
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
};
const formBoxStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  gap: "1rem",
};
const inputTextStyle = {
  backgroundColor: "var(--white)",
  borderRadius: "1rem",
  padding: "1rem",
  fontSize: "1rem",
  border: "none",
  outline: "none",
  height: "100%",
};
const attachmentStyle = {
  display: "flex",
  justifyContent: "end",
};
const attachmentIcon = {
  padding: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderRadius: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  color: "var(--white)",
  cursor: "pointer",
};
const previewStyle = {
  position: "relative",
};
const previewImageStyle = {
  width: "100%",
  maxHeight: "100%",
  objectFit: "cover",
  borderRadius: "1rem",
};
export default PostForm;

import React from "react";
import Like from "../images/like.svg";
import notLike from "../images/notLike.svg";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div style={postStyle}>
      <img style={postImgStyle} src={post.postImage} alt="" />

      <div style={postIsLikedStyle}>
        <img
          style={postLikeIconStyle}
          src={post.iLiked ? Like : notLike}
          alt=""
        />
        <span style={postLikeCountsStyle}>{post.likeCounts} いいね</span>
        <span style={postDetailStyle}>投稿者：{post.accountName}</span>
      </div>

      <div style={postDetailStyle}>
        <span>{post.description}</span>
      </div>
    </div>
  );
};

const postStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  backgroundColor: "var(--lightPurple)",
  borderRadius: "1rem",
  gap: "1rem",
};
const postImgStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "100%",
  objectFit: "cover",
  borderRadius: "1rem",
};
const postIsLikedStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1.5rem",
};
const postLikeIconStyle = {
  width: "2rem",
  height: "100%",
};
const postLikeCountsStyle = {
  color: "var(--white)",
  fontSize: "1rem",
  fontWeight: "bold",
};
const postDetailStyle = {
  color: "var(--white)",
  fontSize: "1rem",
  fontWeight: "bold",
};

export default Post;

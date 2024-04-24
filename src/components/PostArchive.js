import React from "react";
import Post from "./Post";
import { localPostsData } from "../localData/localPostsData";

const PostArchive = () => {
  return (
    <div style={postArchiveStyle}>
      {localPostsData.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};
const postArchiveStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};
export default PostArchive;

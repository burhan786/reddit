import React from "react";
import Comment from "../comment/Comment";

function Post() {
  return (
    <div className="textPost">
      <p className="textPost-content">TextPost Component</p>
      <Comment />
    </div>
  );
}

export default Post;

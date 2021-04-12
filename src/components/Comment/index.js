import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles.css";

function Comment({ name, content }) {
  return (
    <div className="comment">
      <Avatar className="reviewer" />
      <p className="reviewer_name">{name}</p>
      <p className="reviewer_content">{content}</p>
    </div>
  );
}

export default Comment;

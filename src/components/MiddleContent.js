import React from "react";
import "./MiddleContent.css";

function MiddleContent({ Title, Content }) {
  return (
    <div className="MiddleContent__Row">
      <div className="Title">{Title}</div>
      <div className="Content">{Content}</div>
    </div>
  );
}

export default MiddleContent;

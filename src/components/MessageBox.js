import React from "react";

const MessageBox = ({ children }) => {
  return (
    <div className="message-box">
      <span className="message-box--text">{children}</span>
    </div>
  );
};

export default MessageBox;

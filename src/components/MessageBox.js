import React from "react";
import FeatherIcon from "feather-icons-react";

const MessageBox = ({ children, icon = "" }) => {
  return (
    <div className="message-box">
      <span className="message-box--text">
        {icon ? (
          <FeatherIcon className="message-box--icon" icon={icon} size={30} />
        ) : null}
        <span>{children}</span>
      </span>
    </div>
  );
};

export default MessageBox;

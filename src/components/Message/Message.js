import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import "./Message.scss";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, uid, photoURL } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message_sender"}`}
      >
        <Avatar src={photoURL} className="message_photo" />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Message;

import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import "./Chat.scss";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import db from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photoURL: user.photoURL,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <h4>
          To: <span className="chat_name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat_messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat_input">
        <form>
          <input
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>send</button>
        </form>

        <IconButton>
          <MicNoneIcon className="chat_mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;

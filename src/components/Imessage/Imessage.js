import React from "react";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";

import "./Imessage.scss";

function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Imessage;

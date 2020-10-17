import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import React from "react";

import "./Login.scss";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"></img>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;

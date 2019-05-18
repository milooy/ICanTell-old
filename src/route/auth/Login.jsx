import React from "react";
import {loginWithGoogle} from "./firebaseAuth";

export default ({ koo }) => {
  const firebaseAuthKey = "firebaseAuthInProgress";

  const handleGoogleLogin = () => {
    loginWithGoogle().catch(function(error) {
      alert(error); // or show toast
      localStorage.removeItem(firebaseAuthKey);
    });
    localStorage.setItem(firebaseAuthKey, "1");
  };

  // handleGoogleLogin();

  return <button onClick={handleGoogleLogin}>Sign in with google</button>;
};

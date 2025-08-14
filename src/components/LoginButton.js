import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  console.log("LoginButton component rendered");
  console.log(process.env.REACT_APP_AUTH0_DOMAIN);
  console.log(process.env.REACT_APP_REDIRECT_URI);
  console.log(process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI);

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          redirect_uri: process.env.REACT_APP_REDIRECT_URI,
          post_logout_redirect_uri:
            process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;

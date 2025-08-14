import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  console.log("LoginButton component rendered");
  console.log(process.env.REACT_APP_AUTH0_DOMAIN);
  console.log(process.env.REACT_APP_REDIRECT_URI);
  //   console.log(process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI);

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo:
              process.env.REACT_APP_REDIRECT_URI || window.location.pathname,
          },
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;

import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { GoogleButton } from "react-google-button";
import { message } from "antd";

import { loadGoogleUser } from "../../../redux/thunks/auth";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    if (res) {
      const { email, googleId } = res?.profileObj;
      const token = res?.tokenId;

      dispatch(loadGoogleUser({ email, googleId, token }));
    }
  };

  const googleFailure = () => {
    message.error("Google sign in was unsuccessful");
  };

  return (
    <GoogleLogin
      clientId="685181765937-u21ssegohqb8k1urigi9i2vq81sbjlls.apps.googleusercontent.com"
      render={(renderProps) => (
        <GoogleButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Sign in with Google
        </GoogleButton>
      )}
      buttonText="Login"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleAuth;

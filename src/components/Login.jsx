import React from 'react';
import GoogleLogin from 'react-google-login';
import Utils from '../utils';

const Login = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;

  const loginButton = (
    <GoogleLogin
      clientId={googleClientId}
      buttonText={<span><i className="fa fa-google" /> Login with Google</span>}
      onSuccess={Utils.responseSuccess}
      uxMode="popup"
      tag="span"
      className="google_login pull-right"
    />
  );

  const logoutButton = (
    <button className="btn btn-danger pull-right" onClick={Utils.logout} >Logout</button>
  );

  const loginDisplay = Utils.isLoggedIn() ? logoutButton : loginButton;

  return (
    loginDisplay
  );
};

export default Login;

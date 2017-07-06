import React from 'react';
import GoogleLogin from 'react-google-login';
import Utils from '../utils';

/**
 * @description Login Component Using react-google-login package.
 * @function
 * @returns {loginDisplay} a login or logout button
 */
const Login = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;

  /** assign html of login button from react-google-login package to variable loginButton */
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

  /** assign html of logout button to variable logoutButton */
  const logoutButton = (
    <button className="btn btn-danger pull-right" onClick={Utils.logout}>Logout</button>
  );

  return (
    Utils.isLoggedIn() ? logoutButton : loginButton
  );
};

export default Login;

import React from 'react';
import GoogleLogin from 'react-google-login';
import Utils from '../utils';

const Login = () => {
  const responseSuccess = (user) => {
    localStorage.setItem('headlinesToken', user.tokenId);
    location.reload();
  };

  const logout = () => {
    localStorage.removeItem('headlinesToken');
    window.location.replace('/');
  };

  const loginButton = (
    <GoogleLogin
      clientId="720747411251-ks997qe171tetj4oj606js4gmmfjcksq.apps.googleusercontent.com"
      buttonText={<span><i className="fa fa-google" /> Login with Google</span>}
      onSuccess={responseSuccess}
      uxMode="popup"
      tag="span"
      className="google_login pull-right"
    />
  );

  const logoutButton = (
    <button className="btn btn-danger pull-right" onClick={logout} >Logout</button>
  );

  const loginDisplay = Utils.isLoggedIn() ? logoutButton : loginButton;

  return (
    loginDisplay
  );
};

export default Login;

import React from 'react';
import querystring from 'querystring';



class Login extends React.Component {

  render() {

    let oauthURL = "https://accounts.google.com/o/oauth2/v2/auth";

    let opts = {
      client_id:__GOOGLE_CLIENT_ID__,
      redirect_uri: `${__API_URL__}/oauth/google/code`,
      scope: 'email openid profile',
      prompt: 'consent',
      response_type: 'code'
    }

    let QueryString = querystring.stringify(opts);

    let loginURL = `${oauthURL}?${QueryString}`;

    return (
      <React.Fragment>
      <a href={loginURL}>Login With Google</a>
      </React.Fragment>
    )
  }
}



export default Login;

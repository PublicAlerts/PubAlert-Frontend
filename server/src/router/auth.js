'use strict'



import {Router} from 'express';
import User from '../model/user.js';
import bodyParser from 'body-parser';
import basicAuth from '../middleware/basic-auth.js';
import superagent from 'superagent';



let URL = process.env.CLIENT_URL;

export default new Router()


.post('/signup', bodyParser.json() , (req, res, next) => {

  new User.createFromSignup(req.body)
  .then(user => user.tokenCreate())
  .then(token => {
    res.cookie('X-BBB-Token', token);
    res.send(token);
  })
  .catch(next);
})


.get('/usernames/:username', (req, res, next) => {

  User.findOne({username: req.params.username})
  .then(user => {
    if(!user) {
      return res.sendStatus(200);
    }
    return res.sendStatus(409);
  })
  .catch(next);
})


.get('/login', basicAuth, (req, res, next) => {

  req.user.tokenCreate()
  .then((token) => {
    res.cookie('X-BBB-Token', token);
    res.send(token);
  })
  .catch(next);
})


.get('/oauth/google/code', (req, res, next) => {

  let code = req.query.code;
  console.log('code is ', code);

  superagent.post('https://www.googleapis.com/oauth2/v4/token')
  .type('form')
  .send({
    code: code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.API_URL}/oauth/google/code`,
    grant_type: 'authorization_code'
  })
  .then(res => {
    let token = res.body.access_token;
    console.log('token is ', token);
    return token;
  })
  .then (token => {
    return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      let user = res.body;
      console.log('user is ', user);
      return user;
    })
  })
  .then(gUser => {
    let user = User.createFromOAuth(gUser);
    console.log('from User.createFromOAuth is ', user);
    return user;
  })
  .then(user => {
    console.log('user on line 77 is ', user)
    return user.tokenCreate();
  })
  .then(token => {
    console.log('token is ', token)
    res.cookie('X-BBB-Token', token);
    res.redirect(process.env.CLIENT_URL);
  })
  .catch(err => {
    console.log('ERROR from Token Create: ', err.message);
    res.redirect(process.env.CLIENT_URL);
  })
});

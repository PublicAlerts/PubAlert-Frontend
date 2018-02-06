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

  console.log('(1) code', code);

  superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .send({

      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth/google/code`,
      grant_type: 'authorization_code'

    })
    .then( response => {
      console.log('(2) token', response.body);
      res.redirect(URL);
    })
    .catch( error => {
      console.error(error);
      res.redirect(URL);
    });
}}

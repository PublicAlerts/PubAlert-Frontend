'use strict'



require('babel-register')
// load env
require('dotenv').config()
// assert env
require('./src/lib/assert-env.js')
// start server
require('./src/main.js')

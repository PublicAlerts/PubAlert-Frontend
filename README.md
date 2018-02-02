Setup

In one terminal cd server from root dir and run an npm i then run npm run watch In this dir, create a .env file that contains the following:

PORT=3000 API_URL=http://localhost:3000
NODE_ENV=dev CLIENT_URL=http://localhost:8080 CORS_ORIGINS=http://localhost:8080  
GOOGLE_CLIENT_ID=your Client ID here GOOGLE_CLIENT_SECRET=your client Secret here MONGODB_URI=mongodb://localhost/

In a 2nd terminal cd client from root dir and run npm i. Then run live-server from /client
In a 3rd terminal cd server and make a 'db' directory, and start mongo.
Usage

Click link on browser to 'Login with Google'
Select a google account

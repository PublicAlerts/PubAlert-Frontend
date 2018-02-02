import superagent from 'superagent';
import cookie from 'react-cookies';



export const validate = () => (dispatch) => {
  let token = cookie.load('X-BBB-Token');
    if(token){
      superagent.get(`${__API_URL__}/user`)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
          dispatch(loginAction(response.body));
      })
      .catch(console.error);
    };
}


export const login = (user) => (dispatch) => {
  dispatch(loginAction(user));
}


export const logout = () => (dispatch) => {
  cookie.remove('X-BBB-Token');
  dispatch(logoutAction());
}


const loginAction = (user) => ({
  type: 'LOGIN',
  payload: user
})


const logoutAction = (user) => ({
  type: "LOGOUT"
})



// validate -- see if we have a token, fetch user from server using bearer, dispatch "LOGIN"
// login -- just dispatch "LOGIN".  Stretch goal is to re-impliment a basic auth login form
// logout -- remove the token cookie and dispatch "LOGOUT"

let defaultRoute = '/login';


export default (state=defaultRoute, {type, payload}) => {

    switch(type) {

        case "SWITCH_ROUTE":
          return payload;

        case "LOGOUT":
          return '/login';

        case "LOGIN" :
          return '/text';


        default:
          return state;
    }
}

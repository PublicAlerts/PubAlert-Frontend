// TODO: Handle: LOGIN, UPDATE_PROFILE
// TODO: On login, we'll want to set the user that is logged in as our state

export default (state={}, {type, payload}) => {

    switch(type) {

        case 'LOGIN':
            return payload || {};

        case 'LOGOUT':
            return {};

        case 'UPDATE_PROFILE':
            return Object.assign({}, state, payload)

        default:
        return state;
    }



}

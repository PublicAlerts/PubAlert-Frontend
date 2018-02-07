const emptyState = [];

export default (state=emptyState, {type, payload}) => {

  switch ( type ) {

    case "ALERT_ADD":
     return [...state, payload];

    case "ALERT_DESTROY":
     return state.filter(item => item.id !== payload)

    default:
        return state;
  }
};












/*
    case "ALERT_UPDATE":
     return state.map(item => item.id === payload.id ? payload : item );
     */

/*  case "LOCATION_UPDATE":
    return state.map(alert => alert.id === payload.alertId ? (alert.location -= payload.cost) && alert : alert);
    */

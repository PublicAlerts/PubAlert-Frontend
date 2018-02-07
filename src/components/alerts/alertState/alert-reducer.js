const emptyState = [];

export default (state=emptyState, {type, payload}) => {

  switch ( type ) {

    case "ALERT_ADD":
     return [...state, payload];

    case "ALERT_UPDATE":
     return state.map(item => item.id === payload.id ? payload : item );

    case "ALERT_DESTROY":
     return state.filter(item => item.id !== payload)

    case "LOCATION_ADD":
      return state.map(alert => alert.id === payload.alertId ? (alert.location -= payload.cost) && alert : alert);

    case "LOCATION_UPDATE":
      return state.map(alert => alert.id === payload.alertId ? (alert.location -= payload.cost) && alert : alert);

    case "LOCATION_DELETE":
      return state.map(alert => alert.id === payload.alertId ? (alert.location += payload.cost) && alert : alert);

    default:
        return state;

  }
};

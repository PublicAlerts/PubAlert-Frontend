import { log } from "util";

const initialState = {};

export default (state=initialState, action) => {

  let {type, payload={}} = action;
  let {id, alertId} = payload;
  let alertLocations = state[alertId];

  switch(type) {

      case "ALERT_ADD":
        return {...state, [payload.id]:[]};

      case "ALERT_DESTROY":
        let {[payload]:x, ...newState} = state;
        return newState;

      case "LOCATION_ADD":
        return {...state, [alertId]: [...alertLocations, payload]};

      case "LOCATION_DELETE":
        let deleteLocationList = alertLocations.filter(exp => exp.id !== id );
        return {...state, [alertId]: deleteLocationList};

      case "LOCATION_UPDATE":
        let updateLocationList = alertLocations.map(exp => exp.id === id ? payload : exp );
        return {...state, [alertId]: updateLocationList};

      default:
          return state;

  }
};

import uuid from 'uuid/v1';



export const createAlert = (alert) => {

  alert.id = uuid();
  alert.createDate = new Date();

  return {
    type:"ALERT_ADD",
    payload: alert
  };
};


export const deleteAlert = (alertId) => {
  return {
    type: "ALERT_DESTROY",
    payload: alertId
  }
};

import uuid from 'uuid/v1';



export const createLocation = (location) => {

  location.id = uuid();
  location.createDate = new Date();

  return {
    type:"LOCATION_ADD",
    payload: location
  };
};


export const deleteLocation = (locationId) => {
  return {
    type: "LOCATION_DESTROY",
    payload: locationId
  }
};

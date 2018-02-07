import uuid from 'uuid/v1';



export const createLocation = (location) => {

    location.id = uuid();
    location.createDate = new Date();

    return {
        type:"LOCATION_ADD",
        payload: location
    };
};


export const deleteLocation = (location) => {
    return {
        type:"LOCATION_DELETE",
        payload: location
    }
}


export const updateLocation = (location) => {
    return {
        type:"LOCATION_UPDATE",
        payload: location
    }
}

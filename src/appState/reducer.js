import {combineReducers} from 'redux';
import alertReducer from '../components/alerts/alertState/alert-reducer';
import locationReducer from '../components/locations/locationState/location-reducer';



export default combineReducers({
  alerts: alertReducer,
  locations: locationReducer
})

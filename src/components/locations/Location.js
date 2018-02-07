
import React from 'react';
import {connect} from 'react-redux';
import {createLocation, updateLocation, deleteLocation} from './locationState/location-actions';

import LocationForm from './Location-form';
import LocationList from './Location-list';


class Location extends React.Component {

  constructor(props){
    super(props);

    this.state = {
			submitText: 'Add Location'
    }
  }

  render() {

    let {alertId, locations, alertPlace} = this.props;

    return (
      <div id='LocationWrapper'>
        <LocationForm handler={this.props.createLocation}
                     alertId={alertId}
                     alertPlace={alertPlace}
                     submitText={this.state.submitText}/>
        <LocationList
          alertId={alertId}
          locations={locations}
          handleDelete={this.props.deleteLocation}
          handleUpdate={this.props.updateLocation}
        />
      </div>
    )
  }
}

  const mapStateToProps = (state) => ({
    locations: state.locations
  });

  const mapDispatchToProps = (dispatch,getState) => ({
    createLocation: location => dispatch(createLocation(location)),
    deleteLocation: location => dispatch(deleteLocation(location)),
    updateLocation: location => dispatch(updateLocation(location)),
  });



export default connect(mapStateToProps, mapDispatchToProps)(Location);

import React from 'react';
import {connect} from 'react-redux';
import LocationItem from './Location-item';



class LocationList extends React.Component {

  render() {

    let alertId = this.props.alertId;
    let locations = this.props.locations[alertId];

    return (
      <div id="LocationList">
        {
          locations.map(location =>
            <LocationItem key={location.id} location={location}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}/>)
        }
      </div>
    )
  }
}



export default LocationList;

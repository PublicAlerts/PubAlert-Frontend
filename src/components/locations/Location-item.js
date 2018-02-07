import React from 'react';
import LocationForm from './Location-form';



class LocationItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        submitText: 'Update',
        formState: 'inactive',
        submitState: 'hidden'
      }
    }

    render() {
      return (
        <div className="location-item">
          <header id="LocationHeader">
            <LocationForm handler={this.props.handleUpdate}
             handleDelete={this.props.handleDelete}
             alertPlace={this.props.alertPlace}
             updatePlace={this.props.updatePlace}
             location={this.props.location}
             alertId={this.props.alertId}
             submitText={this.state.submitText}
             formState={this.state.formState}
             submitState={this.state.submitState}/>
          </header>
        </div>
      )
    }
}



export default LocationItem;

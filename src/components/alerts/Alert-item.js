import React from 'react';
import Location from '../locations/Location';
import AlertForm from './Alert-form';

class AlertItem extends React.Component {

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
        <div className="alert-item">
          <header id="alertHeader">
            <AlertForm handler={this.props.handleUpdate}
             handleDelete={this.props.handleDelete}
             alert={this.props.alert}
             submitText={this.state.submitText}
             formState={this.state.formState}
             submitState={this.state.submitState}/>
          </header>
          <Location alertId={this.props.alert.id}
                   alertPlace={this.props.alert.place}/>
        </div>
      )
    }
}



export default AlertItem;

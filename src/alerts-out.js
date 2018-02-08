import React, {Component} from 'react';
import moment from 'moment';

class AlertsOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Alerts</h1>
      <ul>

      {this.props.alerts.map(alert => {

        return (

          <li key={alert._id}> Event: {alert.eventName} <br/> Type: {alert.eventType} <br/>Info: {alert.eventInfo}. <br/> Location: {alert.eventLocation}. <br/>Reported by " {alert.userid} " {moment(alert.entryDate).fromNow()}. <p/>


          <a
          id='deleteAlert'
          className={this.deleteButton}
          href="#"
          onClick={() => this.props.handleHide(alert)}
          > remove </a>
          </li>
        )

      })}
      </ul>

      </div>
    )
  }
}



export default AlertsOut;

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
              {this.props.alerts.map(alert =>
                <li key={alert._id}> {alert.eventName}! <br/> {alert.eventType} {alert.eventInfo}. <br/> Location: {alert.eventLocation}. <br/>Reported by {alert.userid} {moment(alert.entryDate).fromNow()}. <p/> </li>
              )}
            </ul>

          </div>
        )
    }
}

export default AlertsOut;

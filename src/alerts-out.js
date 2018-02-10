import React, {Component} from 'react';
import moment from 'moment';

class AlertsOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let filteredAlerts = JSON.parse(localStorage.getItem('filteredAlerts')) || []

    return (
      <div>
      <h1>Alerts</h1>
      <ul>

      {this.props.alerts.map(alert =>

            <li key={alert._id}>
            Event: {alert.eventName} <br/>
            Type: {alert.eventType} <br/>
            Info: {alert.eventInfo}. <br/>
            Location: {alert.eventLocation}. <br/>
            Alert Votes: {alert.alertVotes} <br/>

            Verify this Alert:
            <button id='voteTrue' onClick={() => this.props.handleVote(alert, 1)}>  </button>
            <button id='voteFalse' onClick={() => this.props.handleVote(alert, -1)}> </button>
            <br/>
            Reported by "{alert.userid}" {moment(alert.entryDate).fromNow()}.<br/>
            <button id='deleteAlert' className={this.deleteButton} onClick={() => this.props.handleHide(alert)}>
            Hide Alert
            </button><br/>
            <p/>
            </li>
        
      )}


      </ul>
      </div>
    )
  }
}


export default AlertsOut;

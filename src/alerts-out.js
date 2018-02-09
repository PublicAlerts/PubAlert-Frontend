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
                <li key={alert._id}> Event: {alert.eventName} <br/>
                Type: {alert.eventType} <br/>
                Info: {alert.eventInfo}. <br/>
                Location: {alert.eventLocation}. <br/>
                Alert Votes: {alert.alertVotes} <br/>
                Reported by " {alert.userid} " {moment(alert.entryDate).fromNow()}.
                <br/>

                Verify this Alert:
                <button id='voteTrue' onClick={() => this.props.handleVote(alert, 1)}> TRUE</button>
                <button id='voteFalse' onClick={() => this.props.handleVote(alert, -1)}> FALSE</button>

                <p/>
                </li>
              )}
            </ul>
          </div>
        )
    }
}

export default AlertsOut;

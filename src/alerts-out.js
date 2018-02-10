import React, {Component} from 'react';
import moment from 'moment';

class AlertsOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByTime: true,

    };
  }
  sortAlertsByVotes(unsortedAlerts) {
    return unsortedAlerts.sort((t, f) => {
      if (t.alertVotes < f.alertVotes) {
        return 1;
      }
      if (t.alertVotes > f.alertVotes) {
        return -1;
      }
    });
  }
  render() {

    // let filteredAlerts = JSON.parse(localStorage.getItem('filteredAlerts')) || []
    let sortedAlerts = this.props.alerts.slice();
    if (!this.state.sortByTime) {
      sortedAlerts = this.sortAlertsByVotes(sortedAlerts);
    }

    return (
      <div>
        <h1>Alerts</h1>

        Sort Alerts<br/>
        <button id='sortByTime' title='Time' onClick={() => this.setState({sortByTime:true})}> Sort by time </button>
        <button id='sortByVotes' title='Ranking' onClick={() => {this.setState({sortByTime:false}); console.log(this.state)}}> Sort by Votes </button>

      <ul>
      {sortedAlerts.map(alert =>

            <li id='alertBox' key={alert._id}>
            Event: {alert.eventName} <br/>
            Type: {alert.eventType} <br/>
            Info: {alert.eventInfo}. <br/>
            Location: {alert.eventLocation}. <br/>
            Alert Votes: {alert.alertVotes} <br/>
            Sent by "{alert.userid}" {moment(alert.entryDate).fromNow()}.<br/>

            Alert Actions:
            <button id='voteTrue' title='TRUE' onClick={() => this.props.handleVote(alert, 1)}>  </button>
            <button id='voteFalse' title='FALSE' onClick={() => this.props.handleVote(alert, -1)}> </button>
            <button id='deleteAlert' title='HIDE ALERT' className={this.deleteButton} onClick={() => this.props.handleHide(alert)}> </button>

            <p/>
            </li>
      )}

      </ul>
      </div>
    )
  }
}


export default AlertsOut;

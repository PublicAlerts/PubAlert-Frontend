import React, {Component} from 'react';
import superagent from 'superagent';
import moment from 'moment';

class AlertsOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    }
  }


  componentDidMount() {
    // GET
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res =>
      this.setState({
        alerts: res.body
      }))
    .catch(function(err){
      console.log(err);
    })

    // stick returned data into state
  }


    render() {
        return (
          <div>
            <h1>Alerts</h1>
            <ul>
              {this.state.alerts.map(alert =>
                <li key={alert._id}>{alert.eventInfo}, {alert.eventName}, {alert.eventLocation}. Event was reported by {alert.userid} on {moment(alert.entryDate).fromNow()}.</li>
              )}
            </ul>

          </div>
        )
    }
}

export default AlertsOut;

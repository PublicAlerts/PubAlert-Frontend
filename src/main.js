import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';
import moment from 'moment'; //for time format on alerts

import './style/main.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    }
  }


  componentDidMount() {
    // GET
    superagent.get('http://localhost:3000/api/alerts') /* put heroku backend here when working */
    .then(res => {
      this.setState({
        alerts: res.body
      })
    })
    .catch(function(err){
      console.log(err);
    })

    // stick returned dara into state

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


ReactDom.render(<Main/>, document.getElementById('root'));

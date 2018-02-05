import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';

import './style/main.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [
        {"userid":"Max", "eventName":"concert", "eventInfo":"very nice event", "eventLocation":"Tukwila"},
        {"userid":"Michael", "eventName":"natural disaster", "eventInfo":"catastrophe", "eventLocation":"HERE"}
      ]
    }
  }
    render() {
        return (
          <div>
            <h1>Alerts</h1>
            <ul>
              {this.state.alerts.map(alert =>
                <li>{alert.eventInfo}</li>
              )}
            </ul>
          </div>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));

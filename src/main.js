import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';

import './style/main.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    }
  }


  componentDidMount() {
    // get
    superagent.get('http://localhost:3000/api/alerts')
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
                <li>{alert.eventInfo}</li>
              )}
            </ul>
          </div>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));

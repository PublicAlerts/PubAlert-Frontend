import React, {Component} from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';
import './style/main.scss';
import AlertsIn from './alerts-in.js';
import AlertsOut from './alerts-out.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    }
    //updates state with another GET req to show new alerts with the rest
    this.handlePostComplete = this.handlePostComplete.bind(this);
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
  }

  //populating alerts, GET again, to show with newest one on the page
  handlePostComplete(data) {
    console.log('in main', data);
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res =>
      this.setState({
      alerts: res.body
      }))
    .catch(function(err){
      console.log(err);
    })
  }
    render() {
        return (
          <div>
            <AlertsIn onPostComplete={this.handlePostComplete}/>
            <AlertsOut alerts={this.state.alerts}/>
          </div>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));

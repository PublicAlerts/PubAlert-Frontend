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
    this.handleVote = this.handleVote.bind(this);
    this.refreshDisplay = this.refreshDisplay.bind(this);
  }

  refreshDisplay(){
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res =>
      this.setState({
        alerts: res.body
      }))
      .catch(function(err){
        console.log(err);
      })
    }

  componentDidMount() {
    this.refreshDisplay();
  }


  handleVote(alert, vote){
    console.log(alert, vote);
    alert.alertVotes += vote;
    superagent.patch('https://pass-backend.herokuapp.com/api/alerts/' + alert._id)
    .send(alert)
    .then(res => {
      this.refreshDisplay();
    })
    .catch()
  }

  //populating alerts, GET again, to show with newest one on the page
  handlePostComplete(data) {
    console.log('in main', data);
    this.refreshDisplay();
  }
    render() {
        return (
          <div>
            <AlertsIn onPostComplete={this.handlePostComplete}/>
            <AlertsOut alerts={this.state.alerts} handleVote={this.handleVote}/>
          </div>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));

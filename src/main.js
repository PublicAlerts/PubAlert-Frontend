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
    this.handleHide = this.handleHide.bind(this)

    this.handlePostComplete = this.handlePostComplete.bind(this);
  }


  componentWillMount() {
    // GET
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res => {
        let alerts = res.body;


      console.log('res', alerts);


    let filteredAlerts = JSON.parse(localStorage.getItem('filteredAlerts'))
    //console.log('this is what we get back', filteredAlerts)
    if(filteredAlerts){
      console.log('filtered alerts', filteredAlerts);
      alerts = alerts.filter(alert => {
          return !filteredAlerts.includes(alert._id)
        })
      }

      console.log('new alerts', alerts);
      this.setState({ alerts: alerts })
    })
  }


  componentDidMount() {
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res => {
      let filteredAlerts = res.body;

      console.log('res', filteredAlerts);
      this.setState({ filteredAlerts: res.body })
    })
  }

      // let hideThese = localStorage.get('hiddenAlerts');
      // [id1, id2, id3]
      // remove [id1, id2, id3] from alerts & set that to filteredAlerts


  //populating alerts, again, to show with newest one on the page
  handlePostComplete(data) {
    console.log('in main', data);
    superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    .then(res => {
      this.setState({
      alerts: res.body
    })
  })
    .catch(function(err){
      console.log(err);
    })
}


handleHide(alert){
  console.log('this is the id for the one we want to remove', alert._id);
  let filteredAlerts = JSON.parse(localStorage.getItem('filteredAlerts')) || []

  filteredAlerts.push(alert._id)
  localStorage.setItem('filteredAlerts', JSON.stringify(filteredAlerts))
}

  render() {
      console.log('thistate', this.state);
        return (
          <div>
            <AlertsIn onPostComplete={this.handlePostComplete}/>
            <AlertsOut handleHide={this.handleHide} alerts={this.state.alerts}/>
          </div>
        )
    }
  }

//set the state as page renders


ReactDom.render(<Main/>, document.getElementById('root'));

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
    this.handleVote = this.handleVote.bind(this);
    this.refreshDisplay = this.refreshDisplay.bind(this);
  }



    componentWillMount() {
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

    // componentDidMount() {
    //   superagent.get('https://pass-backend.herokuapp.com/api/alerts')
    //   .then(res => {
    //     let filteredAlerts = res.body;
    //
    //     console.log('res', filteredAlerts);
    //     this.setState({ filteredAlerts: res.body })
    //   })
    //   .then(res =>
    //     this.setState({
    //       alerts: res.body
    //     }))
    //     .catch(function(err){
    //       console.log(err);
    //     })
    //   }

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


        handleVote(alert, vote){
          console.log(alert, vote);
          alert.alertVotes += vote;
          superagent.patch('https://pass-backend.herokuapp.com/api/alerts/' + alert._id)
          .send(alert)
          .then(res => {
            this.refreshDisplay();
          })
          .catch(function(err){
            console.log(err);
          })
        }


    handlePostComplete(data) {
      console.log('in main', data);
      this.refreshDisplay();
    }


    /////////
    handleHide(alert){
      console.log('this is the id for the one we want to remove', alert._id);
      let filteredAlerts = JSON.parse(localStorage.getItem('filteredAlerts')) || []

      filteredAlerts.push(alert._id)
      localStorage.setItem('filteredAlerts', JSON.stringify(filteredAlerts))

      let state = {
        alerts: [alert._id]}

        const alerts = this.state.alerts.filter(v => {
          return v._id !== alert._id
        })
        this.setState({alerts})
      }


    render() {
      console.log('thistate', this.state);
      return (
        <div>
        <AlertsIn onPostComplete={this.handlePostComplete}/>
        <AlertsOut alerts={this.state.alerts} handleVote={this.handleVote} handleHide={this.handleHide}/>
        </div>
      )
    }
  }


ReactDom.render(<Main/>, document.getElementById('root'));

import React, {Component} from 'react';
import superagent from 'superagent';

class AlertsIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      eventLocation: 'downtown',
      eventInfo: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleEnterEventInfo = this.handleEnterEventInfo.bind(this);
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
    // this.state.name = e.target.value
  }

  handleLocationChange(e){
    this.setState({
      eventLocation: e.target.value
    })
  }

  handleEnterEventInfo(e){
    this.setState({
      eventInfo: e.target.value
    })
  }

  handleSubmit(e){
    //use superagent to POST data to server
    e.preventDefault();
    superagent.post('https://pass-backend.herokuapp.com/api/alerts')
    .send({
      userid: this.state.name,
      eventInfo: this.state.eventInfo,
      eventName: "eventNameJazz",
      eventLocation: this.state.eventLocation,
    })
    .then(data => console.log(data))
    .catch(err =>  console.log(err));

    console.log(this.state.name);
    console.log(this.state.eventLocation);
    console.log(this.state.eventInfo);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Alert In</h1>
        <form onSubmit={this.handleSubmit}>

            Name:
            <input type="text" name="name" placeholder= ' User Name' value={this.state.name} onChange={this.handleNameChange}/>

            <div>
              City:
              <select value={this.state.eventLocation} onChange={this.handleLocationChange}>
                <option value="west seattle">West Seattle</option>
                <option value="renton">Renton</option>
                <option value="tukwila">Tukwila</option>
                <option value="federal way">Federal Way</option>
                <option value="downtown">Downtown Seattle</option>
                <option value="tacoma">Tacoma</option>
                <option value="kent">Kent</option>
              </select>
            </div>

            <div>
              Event Details:
              <input type='text' info='info' placeholder= ' Event Description' value={this.state.eventInfo} onChange={this.handleEnterEventInfo}/>
            </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AlertsIn;

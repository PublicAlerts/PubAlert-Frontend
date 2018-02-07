import React, {Component} from 'react';
import superagent from 'superagent';

class AlertsIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      eventLocation: 'downtown',
      eventInfo: '',
      eventName: '',
      eventType: 'other'
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleEnterEventName = this.handleEnterEventName.bind(this);
    this.handleEnterEventInfo = this.handleEnterEventInfo.bind(this);
    this.handleEnterEventType = this.handleEnterEventType.bind(this);

  }

  handleNameInput(e){
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

  handleEnterEventName(e){
    this.setState({
      eventName: e.target.value
    })
  }

  handleEnterEventType(e){
    this.setState({
      eventType: e.target.value
    })
  }

  handleSubmit(e){
    //using superagent to POST data to server
    e.preventDefault();
    superagent.post('https://pass-backend.herokuapp.com/api/alerts')
    .send({
      userid: this.state.name,
      eventName: this.state.eventName,
      eventInfo: this.state.eventInfo,
      eventLocation: this.state.eventLocation,
    })
    .then(data => {
      this.props.onPostComplete(data.body);
    })
    .catch(err =>  console.log(err));

    console.log(this.state.name);
    console.log(this.state.eventLocation);
    console.log(this.state.eventInfo);
    console.log(this.state.handleEnterEventType);
    console.log(this.state.eventName);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Alerts In</h1>
        <form onSubmit={this.handleSubmit}>

            Your Name:
            <input type="text" name="name" placeholder = ' your name' value={this.state.name} onChange={this.handleNameInput}/>

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
                <option value="uw">U-District</option>
                <option value="seatac">SeaTac</option>
                <option value="edmonds">Edmonds</option>
                <option value="everett">Everett</option>
                <option value="issaquah">Issaquah</option>
              </select>
            </div>

            <div>
            Event Name:
            <input type='text' name='name' placeholder = ' name of event' value={this.state.eventName} onChange={this.handleEnterEventName}/>
            </div>

            <div>
              Event Type:
              <select value={this.state.eventType} onChange={this.handleEnterEventType}>
                <option value="amber">AMBER ALERT</option>
                <option value="danger">DANGER</option>
                <option value="traffic">Traffic</option>
                <option value="social">Social Gathering</option>
                <option value="food">Food</option>
                <option value="show">Performance</option>
                <option value="class">Classes</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              Event Details:
              <input type='text' info='info' placeholder= ' event description' value={this.state.eventInfo} onChange={this.handleEnterEventInfo}/>
            </div>


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AlertsIn;

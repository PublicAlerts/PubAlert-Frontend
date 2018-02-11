import React, {Component} from 'react';
import superagent from 'superagent';

const renderIf = (test, componentTrue, compoentFalse=null) => test ? componentTrue : compoentFalse;

class AlertsIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      eventLocation: 'Downtown Seattle',
      eventInfo: '',
      eventName: '',
      eventType: 'Other',
      showForm: false
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleEnterEventName = this.handleEnterEventName.bind(this);
    this.handleEnterEventInfo = this.handleEnterEventInfo.bind(this);
    this.handleEnterEventType = this.handleEnterEventType.bind(this);
    this.showHide = this.showHide.bind(this);
  }

  handleNameInput(e){
    this.setState({
      name: e.target.value
    })
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
    e.preventDefault();
    superagent.post('https://pass-backend.herokuapp.com/api/alerts')
    .send({
      userid: this.state.name,
      eventName: this.state.eventName,
      eventInfo: this.state.eventInfo,
      eventLocation: this.state.eventLocation,
      eventType: this.state.eventType
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
      name: '',
      eventName: '',
      eventInfo: '',
      eventLocation: 'Downtown Seattle',
      eventType: 'Other',
      showForm: false
    })
  }

  showHide() {
    let showForm = ! this.state.showForm;
    this.setState({showForm});
  }
  render() {
    return (
      <div>

      {
        renderIf(

          this.state.showForm,

            <div id='alertsIn'>
            <h1>Alerts In</h1>
            <form onSubmit={this.handleSubmit}>

                Your Name:
                <input type="text" name="name" placeholder = ' your name' required value={this.state.name} onChange={this.handleNameInput}/>

                <div>
                  City:
                  <select value={this.state.eventLocation} onChange={this.handleLocationChange}>
                    <option>Edmonds</option>
                    <option>Everett</option>
                    <option>Lynnwood</option>
                    <option>Redmond</option>
                    <option>Issaquah</option>
                    <option>Northgate</option>
                    <option>U-District</option>
                    <option>Downtown Seattle</option>
                    <option>West Seattle</option>
                    <option>SeaTac</option>
                    <option>Tukwila</option>
                    <option>Renton</option>
                    <option>Kent</option>
                    <option>Federal Way</option>
                    <option>Tacoma</option>
                    <option>Olympia</option>
                  </select>
                </div>

                <div>
                Event Name:
                <input type='text' name='name' placeholder = ' name of event' required  value={this.state.eventName} onChange={this.handleEnterEventName}/>
                </div>

                <div>
                  Event Type:
                  <select value={this.state.eventType} onChange={this.handleEnterEventType}>
                    <option>AMBER ALERT</option>
                    <option>DANGER</option>
                    <option>Breaking News</option>
                    <option>Classes</option>
                    <option>Concert</option>
                    <option>Food</option>
                    <option>Performance</option>
                    <option>Social</option>
                    <option>Traffic</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  Event Details:
                  <input type='text' info='info' placeholder= ' event description' required  value={this.state.eventInfo} onChange={this.handleEnterEventInfo}/>
                </div>

              <input type="submit" value="Submit" />
            </form>
          </div>,

          <button id='enterAlerts' title='NEW ALERT' onClick = {this.showHide}> ENTER NEW ALERT </button>

        )}
      </div>

    )
  }
}

export default AlertsIn;

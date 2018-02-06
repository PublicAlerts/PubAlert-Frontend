import React, {Component} from 'react';

class AlertsIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: 'downtown'
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
    // this.state.name = e.target.value
  }

  handleLocationChange(e){
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit(e){
    //use superagent to POST data to server
    console.log(this.state.name);
    console.log(this.state.location);
    e.preventDefault();
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
              <select value={this.state.location} onChange={this.handleLocationChange}>
                <option value="west seattle">West Seattle</option>
                <option value="renton">Renton</option>
                <option value="tukwila">Tukwila</option>
                <option value="federal way">Federal Way</option>
                <option value="downtown">Downtown Seattle</option>
                <option value="tacoma">Tacoma</option>
                <option value="kent">Kent</option>
              </select>

            </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AlertsIn;

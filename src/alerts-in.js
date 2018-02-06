import React, {Component} from 'react';

class AlertsIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
    // this.state.name = e.target.value
  }

  handleSubmit(e){
    console.log(this.state.name);
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Alert In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AlertsIn;

import React, {Component} from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';
import './style/main.scss';



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.state.username = 'brian' && this.state.password === '1234') {
      this.props.handleLogin()
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" name="username" value={this.state.username}
        placeholder="username"
        onChange={this.handleChange}/>
        <input type="password" name="password"
        value={this.state.password}
        placeholder="password"
        onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    )
  }
}



export default Login;

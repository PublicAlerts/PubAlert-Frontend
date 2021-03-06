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

  componentDidMount() {
    this.handleEnter = (e) => {
      // console.log(e.key)
      if (e.key === 'Enter') {
        this.handleSubmit()
      }
    }
    window.addEventListener('keypress', this.handleEnter)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleEnter)
  }

  handleSubmit() {
    if (this.state.username = 'username' && this.state.password === 'password') {
      this.props.handleLogin()
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <div id='loginScreen'>
        <br/><div id='pubAlertsTitle'>Public Alerts<br/> Sharing System</div><br/>
          <input type="text" name="username" value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}/>
          <input type="password" name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChange}/><br/>
          <button title='CLICK TO LOGIN' id='loginButton' onClick={this.handleSubmit}>  </button>
          <br/> LOGIN <p/>
        </div>
      </div>
    )
  }
}



export default Login;

import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../app/actions/profile';



class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.profile || { username: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

//Update the new username immediately
componentWillReceiveProps(nextProps) {
  if(nextProps) { this.setState(nextProps.profile) }
}


handleChange(e) {
  this.setState({[e.target.name]:(e.target.value)});
}


handleSubmit(e) {
  e.preventDefault();
  this.props.updateProfile(this.state);
  this.setState(this.props.profile);
}

  render() {
    return (
      <form className="profile" onSubmit={this.handleSubmit}>
      <label>
        <span>Change your Username</span>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
      </label>
      <button type="submit">Update</button>
      </form>
    )
  }
}


const mapStateToProps = (state) => ({
  profile: state.profile
});


const mapDispatchToProps = (dispatch, getState) => ({
  updateProfile: (user) => dispatch(profileActions.update(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(Profile);

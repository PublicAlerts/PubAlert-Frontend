import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Text from './text'
import Login from './login'
import Profile from './profile'

import * as authActions from '../app/actions/auth';
import * as routeActions from '../app/actions/routes';



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // TODO: this is a good time to validate the user
      this.props.validate();
    }

    render() {
        return (
            <React.Fragment>
                <Header appTitle="text here"/>

                <Navbar auth={this.props.auth} switchRoute={this.props.switchRoute} logout={this.props.logout}/>

                <main>
                  <Switch location={{pathname:this.props.route}}>
                      <Route exact path='/login' component={Login}/>
                      <Route exact path='/profile' component={Profile}/>
                      <Route exact path='/text' component={Text}/>
                  </Switch>
                </main>

                <Footer>
                    <p>&copy;Code Fellows 2018 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}



// Map state, dispatch, and connect the App
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    route: state.route
});


const mapDispatchToProps = (dispatch, getState) => ({
    validate: () => dispatch(authActions.validate()),
    switchRoute: (route) => dispatch(routeActions.switchRoute(route)),
    logout: () => dispatch(authActions.logout()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

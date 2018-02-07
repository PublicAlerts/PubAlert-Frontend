import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Alerts from './alerts/alert'


class App extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="PASS" />
        <main>
          <Route exact path='/' component={Alerts} />
        </main>
        <Footer>
          <p>Code Fellows 401</p>
        </Footer>
      </div>
    )
  }
}



export default App;

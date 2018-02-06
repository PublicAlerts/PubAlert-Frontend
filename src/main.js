import React, {Component} from 'react';
import ReactDom from 'react-dom'
import './style/main.scss';
import AlertsIn from './alerts-in.js';
import AlertsOut from './alerts-out.js';
// import {Form, Field} from 'simple-react-forms';



class Main extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
          <div>
            <AlertsIn/>
            <AlertsOut/>
          </div>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));

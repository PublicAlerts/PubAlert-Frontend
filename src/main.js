'use strict';



import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import './style/main.scss';



class Header extends React.Component {
  render() {
    return (
      <h1> Generate Cowsay Lorem </h1>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        content: 'click the button!',
      }

    this.update = this.update.bind(this);
  };

  update () {
    this.setState({content: faker.lorem.words(3)});
  };

  render() {
    return (
      <div id='moomoo'>
        <Header />
        <button onClick={this.update}> click me </button>
        <pre>{say({text: this.state.content})}</pre>
      </div>
    )
  }
}



ReactDom.render(<App />, document.getElementById('root'));

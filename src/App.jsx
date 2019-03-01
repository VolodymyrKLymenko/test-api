import React, { Component } from 'react';
import './App.css';

import GreetingSimple from './components/greeting/greeting-simple';
import AdvancedGreeting from './components/greeting/greeting-advanced';

const isLoggedIn = true;

class FancyBorder extends Component {
  render() {
    return (
      <div className="fancy-border" style={{ color: this.props.color }}>
        <h2>sfasfasfa fs fsa </h2>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogged: isLoggedIn}
  }

  render() {
    const greeting = this.state.isLogged
      ? <GreetingSimple />
      : <AdvancedGreeting />

    return (
      <FancyBorder color={'green'}>
        <div className="App">
          <header className="App-header">
            {greeting}
          </header>
        </div>
      </FancyBorder>
    );
  }
}

export default App;

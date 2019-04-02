import React, { Component } from 'react';
import './App.css';
import Signup from './components/signup'
import Loginpage from './components/loginpage'
import Header from './components/header'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { activeSession: 'LoginPage' }
    this.handler = this.handler.bind(this)
  }
  handler(value) {
    this.setState({
      activeSession: value
    })
  }

  render() {
    console.log(this.state.activeSession);
    if(this.state.activeSession === 'LoginPage'){
      return (
        <div className="App">
        <Header/>
          <Loginpage handler={this.handler} />
        </div>
      );
    }else if(this.state.activeSession === 'SignUp'){
      return (
        <div className="App">
          <Header/>
          <Signup handler={this.handler} />
        </div>
      );
    }else if(this.state.activeSession === 'HomePage'){
      return (
        <div className="App">
          <Header/>
          <Signup handler={this.handler} />
        </div>
      );
    }
   
  }
}

export default App;

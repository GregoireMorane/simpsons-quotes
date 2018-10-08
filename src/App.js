import React, { Component } from 'react';
import logo from './logo.svg';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';
import './App.css';


class App extends Component {

  constructor(props){
		super(props);
		this.state = { quote : [] }
	  }
	
	  componentDidMount(){
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
			.then(resp => resp.json())
			.then(resp => this.setState({quote : resp}))
			.then(resp => console.log(this.state.quote[0].character))
	  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GenerateQuote selectQuote={() =>  this.componentDidMount()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;

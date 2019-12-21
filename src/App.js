import React, { Component } from 'react';
import './App.css';

import Congrats from './containers/Congrats/Congrats'
import GuessedWords from './containers/GuessedWords/GuessedWords'
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    
    return (
      <div data-test="component-app" className="container App">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{
          guessedWord:'train', letterMatchCount:3
        }]}/>
      </div>
    )

  }
}

export default App;

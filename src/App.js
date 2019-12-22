import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Congrats from './containers/Congrats/Congrats'
import Input from './containers/Input/Input'
import GuessedWords from './containers/GuessedWords/GuessedWords'
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const {success, guessedWords, secretWord} = this.props;
    return (
      <div data-test="component-app" className="container App">
        <h1>Jotto</h1>
        <Congrats success={success}/>
        <Input/>
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    )

  }
}

const mapStateToProps = ({success, guessedWords, secretWord}) => {
  return {success, guessedWords, secretWord}
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';
export class UnconnectedInput extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentGuess: null
		}
	}

	handleSubmitGuessWord = (evt) => {
		const { guessWord } = this.props;
		const { currentGuess } = this.state;

		if(currentGuess && currentGuess.length > 0){
			evt.preventDefault();
			guessWord(currentGuess);
		}
	}

	renderForm = () => {
		const { guessWord } = this.props;
		const { currentGuess } = this.state;
		return (
			<form className="form-inline">
				<input 
					data-test="input-box"
					className="mb-2 mx-sm-3"
					placeholder="Enter Guess"
					value={currentGuess}
					onChange={evt => this.setState({ currentGuess: evt.target.value })}
					type="text"/>
				<button
					onClick={(evt) => this.handleSubmitGuessWord(evt)}
					data-test="submit-button"
					className="btn btn-primary mb-2"
					type="submit">
					Submit
				</button>
			</form>
		)
	}

	render() {
		const { success } = this.props;
		const content = success ? null : this.renderForm();
		return (
			<div data-test="component-input">
				{content }
			</div>
		)
	}	
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps,{guessWord})(UnconnectedInput);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';
class Input extends Component {

	renderForm = () => {
		return (
			<form className="form-inline">
				<input 
					data-test="input-box"
					className="mb-2 mx-sm-3"
					placeholder="Enter Guess"
					type="text"/>
				<button
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

export default connect(mapStateToProps,{guessWord})(Input);

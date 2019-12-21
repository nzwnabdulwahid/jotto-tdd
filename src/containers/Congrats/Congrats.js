import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {

	render() {
		if(this.props.success){
			return (
				<div data-test="component-congrats" className="alert alert-success">
					<span data-test="congrats-message">
						Congrats!
					</span>
				</div>
			)
		}
		
		return (
			<div data-test="component-congrats" />
		)
		
	}

}

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
}

export default Congrats;

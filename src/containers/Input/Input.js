import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {

	render() {
		return (
			<div></div>
		)
	}	
}

Input.propTypes = {

}

const mapStateToProps = state => {
	return {};
}

export default connect(mapStateToProps)(Input);

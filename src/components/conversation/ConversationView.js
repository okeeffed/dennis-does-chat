import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class Conversation extends Component {
	render() {
		return (
			<div>
				<h1>Ready to roll!</h1>
				<h2>Time to write some Redux</h2>
			</div>
		);
	}
}

Conversation.propTypes = {
	example: PropTypes.string
}

export default Conversation;

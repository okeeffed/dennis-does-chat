import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */
import ChatBubble from '../chatbubble/ChatBubble';

class Conversation extends Component {
	render() {
		return (
			<div className="conversation grid grid-container">
				<ChatBubble />
				<ChatBubble />
			</div>
		);
	}
}

Conversation.propTypes = {
	example: PropTypes.string
}

export default Conversation;

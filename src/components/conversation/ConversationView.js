import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */
import ChatBubble from '../chatbubble/ChatBubble';
import Conversation from '../conversation/Conversation';
class Conversation extends Component {
	render() {
		return (
			<div className="conversation">
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

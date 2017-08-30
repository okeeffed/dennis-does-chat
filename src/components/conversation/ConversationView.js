import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */
import ChatBubble from '../chatbubble/ChatBubble';

class Conversation extends Component {
	render() {
		return (
			<div className="conversation-wrapper">
				<div className="conversation grid grid-container">
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
					<ChatBubble styling="user" />
					<ChatBubble styling="bot" />
				</div>
			</div>
		);
	}
}

Conversation.propTypes = {
	example: PropTypes.string
}

export default Conversation;

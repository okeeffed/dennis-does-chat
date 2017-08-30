import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */
class ChatBubble extends Component {
	render() {
		return (
			<div className="chat-bubble item -six">
				<p>ChatBubble</p>
			</div>
		);
	}
}

ChatBubble.propTypes = {
	example: PropTypes.string
}

export default ChatBubble;

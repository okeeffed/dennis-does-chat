import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */
class ChatBubble extends Component {
	render() {
		return (
			<div className="chat-bubble item -twelve">
				<div className={`${this.props.styling} e-raised`}>
					<p className="reply">{ this.props.chat ? this.props.chat : 'ChatBubble'}</p>
				</div>
			</div>
		);
	}
}

ChatBubble.propTypes = {
	example: PropTypes.string
}

export default ChatBubble;

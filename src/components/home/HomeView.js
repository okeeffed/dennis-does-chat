import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
/* user imports */
import QuickReply from '../quickreply/QuickReply';
import Conversation from '../conversation/Conversation';
import ChatBubble from '../chatbubble/ChatBubble';
import data from './Home.json';

class Home extends Component {
	constructor(props) {
		super();

		this.state = {
			conversation: data
		};
	}
	componentDidMount() {
		const form = document.getElementById('form');
		const convo = document.querySelector('.conversation-wrapper');
		convo.scrollTop = convo.scrollHeight;

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			this.appendMessage();
		});
	}

	appendMessage() {
		const message = document.getElementById('form-message');
		const update = this.state.conversation.push({
			styling: 'user',
			chat: message.value
		});

		this.setState({
			conversation: update,
			...this.state
		});

		message.value = '';

		// Scroll back to bottom
		const convo = document.querySelector('.conversation-wrapper');
		convo.scrollTop = convo.scrollHeight;
	}

	appendConversation() {
		return this.state.conversation.map((data, index) => {
			return (<ChatBubble
						key={index}
						styling={data.styling}
						chat={data.chat}
					/>);
		});
	}

	render() {
		return (
			<Master>
				<div className="home container">
					<h1 className="title">Dennis does chat</h1>
					<div className="chat">
						<Conversation>
							{ this.appendConversation() }
						</Conversation>
						<div className="cta">
							<div className="message">
								<form action="#" id="form" className="form" name="entry" method="post">
									<span className="input-set">
										<label className="label" htmlFor="form-message">Messages</label>
										<input id="form-message" className="input" type="text" name="phone" title="phone" placeholder="Enter message" />
										<span className="error-message">Please enter a valid message</span>
									</span>
								</form>
							</div>
							<div className="quick-replies grid grid-container">

							</div>
						</div>
					</div>
				</div>
			</Master>
		);
	}
}

Home.propTypes = {
	example: PropTypes.string
}

export default Home;

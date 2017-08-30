import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
import axios from 'axios';
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

		const quickReplies = document.querySelectorAll('.quick-reply');
		quickReplies.forEach((el, i) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				this.appendQuickReply(el);
			});
		});
	}

	appendMessage() {
		const messageObj = document.getElementById('form-message');
		const message = messageObj.value;
		const update = this.state.conversation.push({
			styling: 'user',
			chat: message
		});

		this.setState({
			conversation: update,
			...this.state
		});

		messageObj.value = '';

		// Scroll back to bottom
		const convo = document.querySelector('.conversation-wrapper');
		convo.scrollTop = convo.scrollHeight;

		// Go to bot to get reply
		axios.post('http://localhost:3090/webhook', { message: message })
			.then(res => {
				res.data.map(message => {
					console.log(message);
					const update = this.state.conversation.push({
						styling: 'bot',
						chat: message.text
					});

					this.setState({
						conversation: update,
						...this.state
					});
					convo.scrollTop = convo.scrollHeight;
				});
				return res.data;
			})
			.catch(err => {
				console.log(err.message);
				throw err;
			});
	}

	appendQuickReply(el) {
		const message = el.querySelector('.link');
		console.log(message.innerText);
		const update = this.state.conversation.push({
			styling: 'user',
			chat: message.innerText
		});

		this.setState({
			conversation: update,
			...this.state
		});

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
								<QuickReply>Hello</QuickReply>
								<QuickReply>How are you?</QuickReply>
								<QuickReply>Tell me something cool</QuickReply>
								<QuickReply>Show me some work</QuickReply>
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

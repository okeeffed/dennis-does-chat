import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
/* user imports */
import QuickReply from '../quickreply/QuickReply';
import Conversation from '../conversation/Conversation';

class Home extends Component {
	componentDidMount() {
		const form = document.getElementById('form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('PREVENTED');
		});
	}

	render() {
		return (
			<Master>
				<div className="home container">
					<h1>Dennis does chat</h1>
					<div className="chat">
						<Conversation />
						<div className="cta">
							<div className="message">
								<form action="#" id="form" className="form" name="entry" method="post">
									<span className="input-set">
										<label className="label" for="form-message">Mobile</label>
										<input id="form-message" className="input" type="text" name="phone" title="phone" placeholder="Enter message" />
										<span className="error-message">Please enter a valid message</span>
									</span>
								</form>
							</div>
							<div className="quick-replies grid grid-container">
								<QuickReply></QuickReply>
								<QuickReply></QuickReply>
								<QuickReply></QuickReply>
								<QuickReply></QuickReply>
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

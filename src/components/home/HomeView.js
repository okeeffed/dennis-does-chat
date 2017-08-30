import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
/* user imports */
import QuickReply from '../quickreply/QuickReply';
import Conversation from '../conversation/Conversation';

class Home extends Component {
	render() {
		return (
			<Master>
				<div className="home container">
					<h1>Dennis does chat</h1>
					<div className="chat">
						<Conversation />
						<div className="cta">
							<div className="message"></div>
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

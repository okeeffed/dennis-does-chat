import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
/* user imports */
import ChatBubble from '../chatbubble/ChatBubble';
import QuickReply from '../quickreply/QuickReply';

class Home extends Component {
	render() {
		return (
			<Master>
				<div className="home">
					<h1>Dennis does chat</h1>
				</div>
			</Master>
		);
	}
}

Home.propTypes = {
	example: PropTypes.string
}

export default Home;

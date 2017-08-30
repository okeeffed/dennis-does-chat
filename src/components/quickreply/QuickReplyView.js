import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class QuickReply extends Component {
	render() {
		return (
			<div className="quick-reply item -six">
				<p>Button option</p>
			</div>
		);
	}
}

QuickReply.propTypes = {
	example: PropTypes.string
}

export default QuickReply;

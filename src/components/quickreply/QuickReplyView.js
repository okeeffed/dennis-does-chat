import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class QuickReply extends Component {
	render() {
		return (
			<div className="quick-reply item -six e-raised">
				<a>{this.props.children}</a>
			</div>
		);
	}
}

QuickReply.propTypes = {
	example: PropTypes.string
}

export default QuickReply;

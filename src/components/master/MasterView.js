import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class Master extends Component {
	render() {
		return (
			<div className="master">
				{ this.props.children }
			</div>
		);
	}
}

Master.propTypes = {
	example: PropTypes.string
}

export default Master;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class Item extends Component {
	render() {
		return (
			<div className={this.props.styling}>
				{ this.props.children }
			</div>
		);
	}
}

Item.propTypes = {
	example: PropTypes.string
}

export default Item;

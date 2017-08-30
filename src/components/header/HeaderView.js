import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* user imports */

class Header extends Component {

	links() {
		const { data } = this.props;
		return data.map((entry, index) => (
			<a key={entry.key} href={entry.href} className="link">{entry.link}</a>
		));
	}

	render() {
		return (
			<header>
				<div className="section left">

				</div>
				<div className="section">
					<p className="title">Den Den Codes</p>
				</div>
				<div className="section right">
					{ this.links() }
				</div>

			</header>
		);
	}
}

Header.propTypes = {
	example: PropTypes.object
}

export default Header;

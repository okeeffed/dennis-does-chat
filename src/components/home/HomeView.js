import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../master/Master';
/* user imports */
// import Data from './Home.json';

class Home extends Component {
	render() {
		return (
			<Master>
				<div className="home">
				</div>
			</Master>
		);
	}
}

Home.propTypes = {
	example: PropTypes.string
}

export default Home;

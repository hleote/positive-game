import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
	return (<h3>{children}</h3>);
}

Title.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string
	])
};

export default Title;


import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ children }) => {
	return (<h4>{children}</h4>);
}

SubTitle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string
	])
};

export default SubTitle;

